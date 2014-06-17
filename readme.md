## Booster Walkthrough Installation and Use ##

### Screen Shots When Applied to e5 ###

![Walk Throughs Menu Item is generated](/screenshots/e5t_1.png?raw=true)

![Alt text](/screenshots/e5t_2.png?raw=true)

![Alt text](/screenshots/e5t_3.png?raw=true)

![Alt text](/screenshots/e5t_4.png?raw=true)

![Alt text](/screenshots/e5t_5.png?raw=true)

### Installation ###

The walkthrough system, created for e5, requires two additional Javascript files, and a CSS file for styling the steps.

- ####intro.js####
	- A slightly modifired version of the intro.js libary, from usabil.com. Changes made to save variables, including step and walkthrough number, and code for applying tooltips to invisible elements.

- ####boosterWalkthrough.js####
	- (Part 1 - Booster Menus) A file created to dynamically include a walkthrough link and create starting modal menus for selecting walkthroughs.
	- (Part 2 - Booster Contents) All walkthroughs will be outlined here. Single file includes all walkthroughs, and all steps are outlined here. 


- ####introCSS####
	- Styles the tool tips and modals.

Once these files are included in the web page, a walkthrough button will appear beside help. boosterWalkthrough.js must be modified to match the page before the walkthrough will occur.

### Editing Walkthroughs ###

**Modal Menus**

1. Open boosterWalkthrough.js
1. Scroll to modalArray (Under BOOSTER WALKTHROUGH MENUS)
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


**Content**

1. Open boosterWalkthrough.js
1. Scroll to languageArray (Under BOOSTER WALKTHROUGH CONTENT)
1. Add a second level array for each language
2. Add a third level array for each new walkthrough
3. Add a line of text to this array, followed by an apostrophe, for each step.

**Tooltips**

1. In boosterWalkthrough.js, scroll to the switch case
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


----------
## How the Code Works ##


### boosterWalkthrough.js ###

####Menus####
This javascript file has two parts. One is for creating the menus, while the other is for creating the contents of the Walkthrough.


When the web page is ready, `boosterWalkthrough.js` is run.

- The language dropdown menu is checked, and the current language is saved as a variable.
- The language variable is passed through a switch case to determine the proper content for the menus.
- Every modal window is created with the proper content, but not displayed.
- A walkthrough button is appended to the right of the existing help button on each page.

....................................

When the newly appended button is clicked, a function is run that opens the main menu.
Each link on the main menu page runs a script called `loadPage` that

- Closes the current window 
- Takes a page number as a parameter to open the corresponding sub menu page.

....................................


Links on the sub pages run a function called `indexTourStart`. These take three parameters. (activity, the current walkthrough and language.)**

- ***Activity:*** A boolean stating whether a walkthrough is active. False if starting a new one.
- ***Current Walkthrough:*** An integer, determining which walkthrough should be opened and played. Goes by the order in which they are made in `boosterWalkthrough.js`.
- ***Language***: The language to be used. In order as listed in switch case.

> ***Currently these variable must be input manually into the function calls as they are in HTML snippets.*

This script also checks `sessionStorage` to see if a walkthrough is already running, and automatically passes the correct variables to `indexTourStart`.

----------

####Content####

Content is controlled by the function `indexTourStart`.It takes three parameters. When it runs, it

- Saves the current walkthrough ID to `sessionStorage` (int)
- Saves that a walkthrough is now active, to `sessionStorage` (bool)
- reads which language to use
- initializes an empty walkthrough. (`introguide`, an instance of an `intro.js` class)

....................................

The function then runs a switch case, checking the walkthrough ID passed earlier, and sets the empty walkthrough (`introguide.setOptions`) to the correct content for that walkthrough, provided in `languageArray`. 

....................................

Lastly, the function checks whether a walkthrough is active, taking the parameter passed earlier. 

- If it's a new walkthrough, the guide is started from the beginning.
- Otherwise, it reads a variable saved to `sessionStorage` on the previous page of the walkthrough.

`introguide` is created and started using functions from the `intro.js` library. From here on, navigating the walkthrough is controlled by `intro.js`.


----------

### intro.js ###

Much of intro.js was unchanged from the initial repo. (http://usablica.github.io/intro.js/)

This code takes all the step information and applies the tooltips,  monitoring navigation.

When a tool tip is applied to an element, it saves the current step number (`currentStep`), to `sessionStorage.currentSessStep`, so that the walkthrough can continue on the right step when changing pages. 

When the walkthrough is exited, the `sessionStorage.currentSessStep` variable is reset.
