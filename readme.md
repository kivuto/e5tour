## Intro.JS Tour Installation and Use ##

### Installation ###

The tour system, created for e5, requires three additional Javascript files, and a CSS file for styling the tour.

- ####intro.js####
	- A slightly modifired version of the intro.js libary, from usabil.com. Changes made to save variables, including step and tour number, and code for applying tooltips to invisible elements.
- ####bwContent.js####
	- This file is where all walkthroughs will be outlined. Single file includes all walkthroughs, and all steps are outlined here. 
- ####bwMenus.js####
	- A file created to dynamically include a tour link and create starting modal menus for selecting tours.

- ####introCSS####
	- Styles the tours and modals.

Once these files are included in the web page, a tour button will appear beside help. bwContent and bwMenus must be modified to match the page before the tour will occur.

### Editing Tour ###

**Content**

1. Open bwContent.js
1. Scroll to languageArray
1. Add a second level array for each language
2. Add a third level array for each new walkthrough
3. Add a line of text to this array, followed by an apostrophe, for each step.

**Tooltips**

1. In bwContent.js, scroll to the switch case
2. For each walkthrough, add a new case.
3. Populate case with introguide.setOptions({})

Default Step Setup

>      steps: [
>       {
>        element: '#element',
>        intro: languageArray[cLang][0][0],
>        position: 'right',
>        tooltipClass: 'last'
>       }, ]


- **Element:** What element tooltip will attach to. Remove to appear centered on page.
- **Intro:** Tooltip content, provided in language array. [Walkthrough #][Step #]
- **Position:** Determines where tooltip will appear relative to element.
- **tooltipClass:** Add 'last' or 'first' if last or first on page. Don't include otherwise.

**Modal Menus**

1. Open bwMenus.js
1. Scroll to modalArray
1. Edit Html in array.
	1. First line is main menu. Change links for each walkthrough.
	2. Each line after is a sub page. Change HTML  as desired.
	3. Change variable in function calls to match walkthrough number and language ID.
	3. Currently, additional walkthroughs must be added manually. (TODO: automate)
		1. Add new page Var
		2. Add new line in array with new div ID
		3. Add page var to each case in switch
		4. Append new page to main
		5. Add new jQuery dialog matching div ID

----------
## How the Code Works ##

COMING SOON.