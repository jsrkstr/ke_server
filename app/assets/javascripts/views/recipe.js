App.views.Recipe = Backbone.View.extend({

	template : _.template($("#recipe-templ").html()),


	events : {
		"click .h-icon"	: "editRecipe"
	},


	initialize : function(args){
		// do something...
	},


	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		
		setTimeout($.proxy(function() {
			this.$('.on_off :checkbox').iphoneStyle();
    		this.$('.disabled :checkbox').iphoneStyle();
		},this), 100);

		return this;
	},

	editRecipe : function(){
		App.currentRouter.navigate("/recipes/" + this.model.id + "/edit", { trigger : true});
	}

});
	