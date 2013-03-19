App.views.Recipes = Backbone.View.extend({

	el : ".recipes-screen .recipes",

	template : $(".recipes-screen").html(),


	events : {
		//bind events..
	},


	initialize : function(args){
		this.collection.on("reset", this.render, this);
	},


	render : function(){
		this.addAll();
		return this;
	},


	addAll : function(){
		this.collection.each(function(model){
			this.addOne(model);
		},this);
	},


	addOne : function(model){
		var view = new App.views.Recipe({model : model});
		this.$el.append(view.render().el);
	}

});

	