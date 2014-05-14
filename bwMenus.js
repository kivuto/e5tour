/**********************************************
BOOSTER WALKTHROUGH MENUS

Version 0.1 - May 14, 2014

-For use with Booster Content Script and introJS
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