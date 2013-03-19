var App = {

  models : {},
  collections : {},
  views : {},
  routers : {},
  misc : {},


  //The main function for the js
  init : function() {

    App.currentRouter = new App.routers.Router();

    App.currentRecipes = new App.collections.Recipes();
    App.currentRecipesView = new App.views.Recipes({collection : App.currentRecipes});

    App.currentRuleoptions = new App.models.RuleOptions();

    // start router
    Backbone.history.start({silent : false});

  },



  // Blocks the UI with a spinner when App is loading...
  // options => {showOverlay : true/false}
  showSpinner : function(options) {
    options = options || {};
    $.blockUI({
      message : "<img src='/world/images/spinner-big.gif' style='width: 50px; height : 50px'><br/><div style='margin-top: 10px;color: grey;font-size: 14px;'>Loading</div>",
      css: { 
        border: 'none', 
        padding: '15px', 
        width : "75px",
        backgroundColor: '#333', 
        '-webkit-border-radius': '10px', 
        '-moz-border-radius': '10px', 
        opacity: .9, 
        color: '#fff',
        left : "46%",
        top : "30%"
      },
      showOverlay : options.showOverlay || false,
      overlayCSS : {
        opacity : 0.1
      }
    }); 
  },


  // Removes the UI blocking element...
  hideSpinner : function() {
    $.unblockUI();
  }

};

// Template Default setting change link - http://stackoverflow.com/questions/7514922/rails-with-underscore-js-templates
_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};