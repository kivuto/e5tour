$(document).ready(function(){

		//var tourText = document.createElement("script"); tourText.type = "text/javascript"; tourText.src = "./js/indexIntro.js"; /*"https://raw.github.com/kivuto/e5Helpers/master/indexIntro.js";*/ $("head").append(tourText);
		//var tourScript = document.createElement("script"); tourScript.type = "text/javascript"; tourScript.src = "./js/intro.js";/*"https://raw.github.com/kivuto/e5Helpers/master/intro.js";*/ $("head").append(tourScript);
		//var tourCSS = document.createElement("link"); tourCSS.rel="stylesheet"; tourCSS.type = "text/css"; tourCSS.href = "./js/introjs.css"; /*"https://raw.github.com/kivuto/e5Helpers/master/introjs.css";*/ $("head").append(tourCSS);

		var active = sessionStorage.isTour;

		if($('#helpbutton').length > 0)
		{							
			$('li > #helpbutton').append("<li><span><a id='startTours' style='cursor:pointer'>Tour</a></span></li>");
		}

		if(active == "true")
		{	
			indexTourStart(true);
		}


	$('#startTours').click(function(){
	
		var page1="<div id='DialogDiv' title='Learning Resources'><p>Use the following tours to accommodate yourself with e5 and learn all of the tips and tricks required.</p><ul><li><a onclick='loadPage2();'>Importing Users</a><li><a onclick=''>Searching for Organizations</a><li><a onclick=''>Adding Products</a></li></ul></div>";

		$('#leftContent').append(page1);

		$('#DialogDiv').dialog({
		modal:true,
		resizable:false,
		draggable:false,
		show:{
			effect: "fade",
			duration: 600
		},
		hide:{
			effect: "drop",
			direction: "down",
			duration: 300
		}
		});
	});

});

function loadPage2(){
	$(".ui-dialog-content").dialog("close");

	var page2="<div title='Importing Users' id='DialogDiv2'><p>This tour will walk you through importing users to your database.</p><a onclick='indexTourStart(false);'>Start Learning</a></div>"
	$('#leftContent').append(page2);

	$('#DialogDiv2').dialog({
		modal:true,
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
}