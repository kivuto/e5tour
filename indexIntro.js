function indexTourStart(curr){

  var introguide = introJs();
  sessionStorage.isTour = true;
 
 
  /*READ ME
  --------------------------------
    
    The section below is where tour steps will be defined. 
    intro: determines the tool tip text.
    element: determines the element you want the tool tip to adhere to.
      -Leave blank to have tool tip appear in the middle of the screen.
    position: determines where the tool tip will appear relative to element.

  --------------------------------
  */

  introguide.setOptions({
    steps: [
    {
    	intro: "The following will outline how to Import Users"
    },
    {
      element: $("a.ymenu-folder:contains('Users')")[0],
      intro: 'Find Users Here',
      position: 'right'
    },
    {
      element: $("ul > li > a:contains('User Imports')")[0],
      intro: 'This page displays all imports that have been done to this organization.',
      position: 'right',
      //TODO tooltipCSSClass to make next button inactive.
    },
    /*------------PAGE SWITCH-----------*/
    {
    	intro: 'Each time a new import is performed, a record is created to view.'
      //TODO tooltipCSSClass to make prev button inactive.
    },
    {
      element: '#ctl00_ctl00_cpContent_cpButtons_btnImport',
    	intro: 'Click on "Import" to start a new import and go to the Import Details Page.',
      position: 'right'
      //TODO tooltipCSSClass to make next button inactive.
    },
    /*------------PAGE SWITCH-----------*/
    {
      element: '#ctl00_ctl00_cpContent_cpDetails_efvUserImportBatchDetails_txtUserImportBatchName',
      intro: 'Enter a name for the import for their reference.',
      position: 'right'
      //TODO tooltipCSSClass to make prev button inactive.

    },
    {
      element: 'ctl00_ctl00_cpContent_cpDetails_efvUserImportBatchDetails_isOrganization',
      intro: 'Select your member organization if it is not already properly selected.',
      position: 'bottom'
    }
    ]
  });
  /*------------------------------
    END OF TOUR */


  /*Checks if there is a tour already running when switcing pages.*/
  if(curr === false)
  {
    introguide.start();
  }
  else if(curr === true)
  {
    introguide.goToStep(sessionStorage.currentSessStep).start();
  }

}