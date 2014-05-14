/**********************************************
BOOSTER WALKTHROUGH CONTENT

Version 0.1 - May 14, 2014

-For use with Booster Menus Script and introJS
-Provides all the content for e5 walkthroughs.
**********************************************/

function indexTourStart(actv, curr, lang){

  $(".ui-dialog-content").dialog("close"); //closes modal windows

  sessionStorage.actNum  = curr; //sets current walkthrough id for use when switching pages
  sessionStorage.isTour = true; //sets whether a walkthrough is active
  var cLang = lang; //what language is currently active

  var introguide = introJs(); //initialize walkthrough



 /*----------------------------------------------------------------------------
 @languageArray
      -Multi dimension array of walkthrough steps in multiple languages.
      -Seperated into containing arrays of language, walkthroughs and steps.
 ------------------------------------------------------------------------------*/
  
  var languageArray=  
  [
    //English/////////////////////////
    [
      //Walkthrough 1
      [
        //List of steps; each line followed by a comma is a new step.
        'Find Users Here',
        'This page displays all imports that have been done to this organization',
        'Each time a new import is performed, a record is created to view.',
        'Click on "Import" to start a new import and go to the Import Details Page.',
        'Enter a name for the import for their reference.',
        'Select your member organization if it is not already properly selected.'
      ],
      //Walkthrough 2
      [
        'Find Organisations Here'
      ],
      //Walkthrough 3
      [
        'Find Products Here'
      ]
    ],
    //French/////////////////////////
    [
      [
         'Trouver Utilisateurs Voici', 
         'Cette page affiche toutes les importations qui ont été faites à cette organisation', 
         'Chaque fois qu`une nouvelle importation est effectuée, un dossier est créé pour voir.', 
         'Cliquez sur "Importer" pour commencer une nouvelle importation et aller à l`importation Détails Page.', 
         'Entrez un nom pour l`importation à titre de référence.', 
         'Choisissez votre organisation membre si elle n`est pas déjà sélectionnée correctement.'
      ],
      [
        'Trouver les organisations ici'           
      ],
      [
        'Trouver les produits ici'
      ]
    ],
    //German/////////////////////////
    [
      [
          'Benutzer finden hier',
          'Diese Seite zeigt alle Importe, die zu dieser Organisation durchgeführt worden sind', 
          'Jedes Mal, wenn ein neuer Import durchgeführt wird, wird ein Datensatz erstellt, um zu sehen.',
          'Klicken Sie auf "Importieren", um einen neuen Import zu starten und gehen Sie zum Import Details Seite.', 
          'Geben Sie einen Namen für den Import für ihre Referenz.',
          'Wählen Sie Ihren Mitgliedsorganisation, wenn es nicht bereits richtig ausgewählt.'
      ],
      [
        'Hier finden Organisationen'
      ],
      [
        'Hier finden Produkte'
      ]
    ],
  ];


/*--------------------------------------------------
@switch
  -decides which walkthrough should be running
  -language is set automatically
  -needs case for each walkthrough available
--------------------------------------------------*/

  switch(curr)
  {
    /***********Walkthrough 1: Importing Users**********/
    case 1:
      introguide.setOptions({ 
      steps: [  //Set up steps, needs one set of brackets {}, for each step
      {
        element: $("a.ymenu-folder:contains('Users'), a.ymenu-folder:contains('Benutzer'), a.ymenu-folder:contains('Utilisateurs')")[0], //element that step attaches to
        intro: languageArray[cLang][0][0],  //tooltip text, determined in array above. [language][walkthrough number][Step number]
        position: 'right',  //where tooltip appears in relation to element.
        tooltipClass: 'first' //states that tooltip is first on page, removes back button.
      },
      {
        element: $("ul > li > a:contains('User Imports'), ul > li >  a:contains('Benutzerimporte'), ul > li > a:contains('Importations d’utilisateurs')")[0],
        intro: languageArray[cLang][0][1],
        position: 'bottom',
        tooltipClass: 'last'  //states that tooltip is last on page, removes next button.
      },
      {
        intro: languageArray[cLang][0][2],
        tooltipClass: 'first'
      },
      {
        element: '#ctl00_ctl00_cpContent_cpButtons_btnImport',
        intro: languageArray[cLang][0][3],
        position: 'right',
        tooltipClass: 'last'
      },
      {
        element: '#ctl00_ctl00_cpContent_cpDetails_efvUserImportBatchDetails_txtUserImportBatchName',
        intro: languageArray[cLang][0][4],
        position: 'right',
        tooltipClass: 'first'
      },
      {
        element: 'ctl00_ctl00_cpContent_cpDetails_efvUserImportBatchDetails_isOrganization',
        intro: languageArray[cLang][0][5],
        position: 'bottom'
      }
      ]
    });
    break;

    /***********Walkthrough 2: Setting up Organizations**********/
    case 2:
      introguide.setOptions({
        steps: [
        {
          element: $("a.ymenu-folder:contains('Organization')")[0],
          intro: languageArray[cLang][1][0],
          position: 'right'
        }
        ]
    });
    break;

    /***********Walkthrough 3: Adding Products************/
    case 3:
      introguide.setOptions({
        steps: [
        {
          element: $("a.ymenu-folder:contains('Products')")[0],
          intro: languageArray[cLang][2][0],
          position: 'right'
        }
        ]
      });
    break;

  }



  /*Checks if there is a walkthrough already running when switcing pages.*/
  if(actv === false)
  {
    introguide.start();
  }
  else if(actv === true)
  {
    introguide.goToStep(sessionStorage.currentSessStep).start(); //Goes to the new step on new page.
  }

}