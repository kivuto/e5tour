/**********************************************
BOOSTER WALKTHROUGH MENUS

Version 0.1 - May 14, 2014

-For use with introJS
-Creates menus for e5 walkthroughs
**********************************************/

$(document).ready(function(){

  	var langDrop = document.getElementById("ctl00_ctl00_ucSelectLanguageLabel_ddlLanguageSelection"); //returns language drop down
	var	language = 1;

	//Finds what current page language setting is.
  	if(langDrop != null)
	{
		language = parseInt(langDrop.options[langDrop.selectedIndex].value);
	}

	var cLang; //current language id

	var page1;
	var page2;
	var page3;
	var page4;

	/*----------------------------------------------------------------------------
	@modalArray
	  -Multi dimension array of modal html in multiple languages.
	  -Seperated into containing arrays of language and page.
	  -Each line is a different modal window.
	  -Need to edit function links with proper info. (active, walkthrough id, language)
	------------------------------------------------------------------------------*/
  
	var modalArray = 
	[
		//English
		[
			"<div id='DialogMain' title='Learning Resources'><p>Use the following walkthroughs to accommodate yourself with e5 and learn all of the tips and tricks required.</p><ul><li><a onclick='loadPage(1);'>Importing Users</a><li><a onclick='loadPage(2)'>Searching for Organizations</a><li><a onclick='loadPage(3)'>Adding Products</a></li></ul></div>",
			"<div title='Importing Users' id='DialogDiv1'><p>This walkthroughs will walk you through importing users to your database.</p><a onclick='indexTourStart(false, 1, 0);'>Start Learning</a></div>", //Link starts walkthrough (active, walkthrough id, language)
			"<div title='Searching for Organizations' id='DialogDiv2'><p>This walkthroughs will walk you through setting up and searching organizations.</p><a onclick='indexTourStart(false, 2, 0);'>Start Learning</a></div>",
			"<div title='Adding Products' id='DialogDiv3'><p>This walkthroughs will walk you through importing products to your database.</p><a onclick='indexTourStart(false, 3, 0);'>Start Learning</a></div>"
		],						
		//French
		[
			"<div id='DialogMain' title='Ressources éducatives'><p>Utilisez les visites suivantes pour vous accueillir avec e5 et apprendre tous les trucs et astuces nécessaires.</p><ul><li><a onclick='loadPage(1);'>Importation d'Utilisateurs</a><li><a onclick='loadPage(2)'>Vous cherchez des organisations</a><li><a onclick='loadPage(3)'>Ajout de Produits</a></li></ul></div>",
			"<div title='Importation d`utilisateurs' id='DialogDiv1'><p>Cette visite vous guidera à travers l'importation d'utilisateurs à votre base de données.</p><a onclick='indexTourStart(false, 1, 1);'>Commence édtude</a></div>",
			"<div title='Cherchez pour des Organisations' id='DialogDiv2'><p>Cette visite vous guidera à travers la mise en place et les organisations de recherche.</p><a onclick='indexTourStart(false, 2, 1);'>Commence édtude</a></div>",
			"<div title='L`ajout de produits' id='DialogDiv3'><p>Cette visite vous guidera à travers l'importation de produits à votre base de données.</p><a onclick='indexTourStart(false, 3, 1);'>Commence édtude</a></div>"
		],
		//German
		[
			"<div id='DialogMain' title='Lernmittel'><p>Verwenden Sie die folgenden Touren, um sich mit e5 aufnehmen und erfahren Sie alle Tipps und Tricks erforderlich.</p><ul><li><a onclick='loadPage(1);'>Importieren von Benutzern</a><li><a onclick='loadPage(2)'>Suche nach Organisationen</a><li><a onclick='loadPage(3)'>Hinzufügen von Produkten</a></li></ul></div>",
			"<div title='Importieren von Benutzern' id='DialogDiv1'><p>Diese Tour führt Sie durch den Import von Benutzern, um Ihre Datenbank zu gehen.</p><a onclick='indexTourStart(false, 1, 2);'>Starten Lernen</a></div>",
			"<div title='Suche nach Organisationen' id='DialogDiv2'><p>Diese Tour führt Sie durch die Einrichtung und die Suche Organisationen gehen.</p><a onclick='indexTourStart(false, 2, 2);'>Starten Lernen</a></div>",
			"<div title='Hinzufügen von Produkten' id='DialogDiv3'><p>Diese Tour führt Sie durch Import von Produkten, um Ihre Datenbank zu gehen.</p><a onclick='indexTourStart(false, 3, 2);'>Starten Lernen</a></div>"
		]
	 ];

	var active = sessionStorage.isTour;	//Gets the activity bool to see if a walkthrough is active.
	var activeNum = parseInt(sessionStorage.actNum);	//Gets which walkthrough is running/


	/*----------------------------------------------------------------------------
	 @switch
	 	-takes in language set in window.
	 	-determines which set of modal windows needs to be loaded.
	 	-sets language ID for walkthrough definition to use.
 	------------------------------------------------------------------------------*/
  
  	switch (language){
	    //English
    	case 1:
    		cLang = 0;
			page1 = modalArray[0][0];
			page2 = modalArray[0][1];
			page3 = modalArray[0][2];
			page4 = modalArray[0][3];
	    	break; 
	    //French
	    case 2:
		    cLang = 1;
			page1 = modalArray[1][0];
			page2 = modalArray[1][1];
			page3 = modalArray[1][2];
			page4 = modalArray[1][3];	    	
			break;
	    //Deutsch
	    case 5:
	    	cLang = 2;
			page1 = modalArray[2][0];
			page2 = modalArray[2][1];
			page3 = modalArray[2][2];
			page4 = modalArray[2][3];
	      	break;
	    //Espanol  
	    case 12:
	    	cLang = 3;
	      	break;
	    //Italiano
	    case 63:	    	
	    	cLang = 4;
	      	break;
	    //magyar
	    case 37:
	    	cLang = 5;
	      	break;
	    //Portuguese
	    case 8:
	    	cLang = 6;
	      	break;
	    //Русский
	    case 77:
	    	cLang = 7;
	      	break;
	    //中文 (简体，中国)
	    case 74:
	    	cLang = 8;
	      	break;
	    //日本語バージョン
	    case 3:
	    	cLang = 9;
	      	break;
	    default:
	      	break;
	}

	//Adds a dynamic walkthrough button to the main page.
	if($('#helpbutton').length > 0)
	{						
		$('li > #helpbutton').append("<li><span><a id='startTours' style='cursor:pointer'>Walkthroughs</a></span></li>");
	}

	//Checks if a walkthrough is active and restarts it
	if(active == "true")
	{
		indexTourStart(true, activeNum, cLang);
	}

	//Initializes modal content for use
	$('#leftContent').append(page1);
	$('#leftContent').append(page2);
	$('#leftContent').append(page3);
	$('#leftContent').append(page4);

	/*----------------------------------------------------------------------------
 	@Dialogs
    	-Initializes hidden modal menu windows that offer walkthrough choices.
    	-Requires one for each walkthrough page right now.
 	------------------------------------------------------------------------------*/
  
	$('#DialogMain').dialog({
		modal:true,
		autoOpen:false,
		resizable:false,
		draggable:false,
		show:{
			effect: "fade",	//Opening Effects
			duration: 600
		},
		hide:{
			effect: "drop",	//Closing Effects
			direction: "down",
			duration: 300
		}
	});

	$('#DialogDiv1').dialog({
		modal:true,
		autoOpen:false,
		resizable:false,
		draggable:false,
		show:{
			effect: "drop",
			direction: "down",
			duration: 300
		},
		hide:{
			effect: "drop",
			direction: "down",
			duration: 200
		}
	});
	
	$('#DialogDiv2').dialog({
		modal:true,
		autoOpen:false,
		resizable:false,
		draggable:false,
		show:{
			effect: "drop",
			direction: "down",
			duration: 300
		},
		hide:{
			effect: "drop",
			direction: "down",
			duration: 200
		}
	});
	
	$('#DialogDiv3').dialog({
		modal:true,
		autoOpen:false,
		resizable:false,
		draggable:false,
		show:{
			effect: "drop",
			direction: "down",
			duration: 300
		},
		hide:{
			effect: "drop",
			direction: "down",
			duration: 200
		}
	});

	//Opens main modal window on walkthrough click.
	$('#startTours').click(function(){
		$(".ui-dialog #DialogMain").dialog("open");		
	});

});

/*----------------------------------------------------------------------------
@loadPage
	-Runs when clicking links on main modal menu.
	-closes current window.
	-opens new page window.
------------------------------------------------------------------------------*/
function loadPage(number){
	$(".ui-dialog-content").dialog("close");

	switch(number)
	{
		case 1:
			$('.ui-dialog #DialogDiv1').dialog("open");
			break;
		case 2:
			$('.ui-dialog #DialogDiv2').dialog("open");
			break;
		case 3:
			$('.ui-dialog #DialogDiv3').dialog("open");
			break;
		default:
			break;
	}
}



/***********************************************************************************************
BOOSTER WALKTHROUGH CONTENT

Version 0.1 - May 14, 2014

-For use with introJS
-Provides all the content for e5 walkthroughs.
***********************************************************************************************/

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