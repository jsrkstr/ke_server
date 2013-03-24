App.views.Recipe = Backbone.View.extend({

	template : _.template($("#recipe-templ").html()),

	tagName : "div",
	className : "recipe",

	events : {
		"click .h-icon"	: "editRecipe"
	},


	initialize : function(args){
		// do something...
	},


	render : function(){
		var json = this.model.toJSON();
		
		this.$el.html(this.template(json));
		
		setTimeout($.proxy(function() {
			this.$('.on_off :checkbox').iphoneStyle();
    		this.$('.disabled :checkbox').iphoneStyle();
		},this), 100);

		if(json.trends){
			var trendsChartData = new Backbone.Collection(json.trends);
			var trendsView = new App.views.RecipeTrendsChart({collection : trendsChartData});
			this.$(".widget-block").html(trendsView.render().el);
		}

		return this;
	},

	editRecipe : function(){
		App.currentRouter.navigate("/recipes/" + this.model.id + "/edit", { trigger : true});
	}

});
	