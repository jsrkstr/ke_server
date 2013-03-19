App.views.EditRecipe = Backbone.View.extend({

	el : ".edit-recipe-screen .form",

	template : _.template($("#edit-recipe-templ").html()),


	events : {
		// bind events..
	},


	initialize : function(args){
		this.on("reset",this.render,this);

		// load user events / props / operators

	},


	render : function(){
		// hack
		this.model = new App.models.Recipe();
		//hack
		this.$el.html(this.template(this.model.toJSON()));
		var view = new App.views.Rule({ model : this.model });
		this.$(".user-segment-form .widget-block").html(view.render().el);
		return this;
	}

});
	