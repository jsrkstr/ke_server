App.routers.Router = Backbone.Router.extend({

  routes : {
    ""                                : "dashboard",
    "dashboard"                       : "dashboard",
    "recipes"                         : "recipes",
    "recipes/:id/edit"                : "editRecipe",
    "recipes/new"                     : "newRecipe"
  },


  // Home Page 
  dashboard : function() {
    this.showScreen("dashboard");
  },


  recipes : function(){
    this.showScreen("recipes");

    App.currentRecipes.fetchOnce();
  },


  editRecipe : function(id){
    this.showScreen("edit-recipe");

    var model = App.currentRecipes.get(id);
    if(!model){
      model = new App.models.Recipe({id : id});
      App.currentRecipes.add(model);
      model.fetch();
    }

    App.currentEditRecipeView = new App.views.EditRecipe({model : model});
    App.currentEditRecipeView.render();
  },


  newRecipe : function(){
    this.showScreen("edit-recipe");
    var model = new App.models.Recipe();
    App.currentEditRecipeView = new App.views.EditRecipe({model : model});
    App.currentEditRecipeView.render();
  },


  showScreen : function(screen){
  	$(".main-wrapper .container-fluid").hide();
  	$(".main-wrapper ." + screen + "-screen").show();
  } 

}); //App.routers.Router