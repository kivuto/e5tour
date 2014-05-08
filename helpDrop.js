$(document).ready(function(){
		var tourScript = document.createElement("script"); tourScript.type = "text/javascript"; tourScript.src = /*"intro.js";*/"https://raw.github.com/kivuto/e5tour/master/intro.js"; $("head").append(tourScript);
		var tourText = document.createElement("script"); tourText.type = "text/javascript"; tourText.src = /*"indexIntro.js"; */"https://raw.github.com/kivuto/e5tour/master/indexIntro.js"; $("head").append(tourText);
		var tourCSS = document.createElement("link"); tourCSS.rel="stylesheet"; tourCSS.type = "text/css"; tourCSS.href = /*"introjs.css";*/ "https://raw.github.com/kivuto/e5tour/master/introjs.css"; $("head").append(tourCSS);

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
