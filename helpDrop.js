$(document).ready(function(){

		var tourText = document.createElement("script"); tourText.type = "text/javascript"; tourText.src = /*"indexIntro.js"; */"https://raw.github.com/kivuto/e5Helpers/master/indexIntro.js"; $("head").append(tourText);
		var tourScript = document.createElement("script"); tourScript.type = "text/javascript"; tourScript.src = /*"intro.js";*/"https://raw.github.com/kivuto/e5Helpers/master/intro.js"; $("head").append(tourScript);
		var tourCSS = document.createElement("link"); tourCSS.rel="stylesheet"; tourCSS.type = "text/css"; tourCSS.href = /*"introjs.css";*/ "https://raw.github.com/kivuto/e5Helpers/master/introjs.css"; $("head").append(tourCSS);

		var active = sessionStorage.isTour;

		if($('#helpbutton').length > 0)
		{							
			$('li > #helpbutton').append("<li><span><a style='cursor:pointer' onclick='indexTourStart(false)'>Tour</a></span></li>");
		}

		if(active == "true")
		{	
			indexTourStart(true);
		}
});
