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

		var totals = {};

		for(var eventName in json.trends[0].values){
			totals[eventName] = _.sum(_.map(json.trends, function(actionTrends){
				return actionTrends.values[eventName][0];
			}));
		}

		_.extend(json, {
			totals : totals
		});
		
		this.$el.html(this.template(json));
		
		setTimeout($.proxy(function() {
			this.$('.on_off :checkbox').iphoneStyle();
    		this.$('.disabled :checkbox').iphoneStyle();
		},this), 100);

		if(json.trends){
			var trendsChartData = new Backbone.Collection(json.trends);
			var trendsView = new App.views.RecipeTrendsChart({collection : trendsChartData});
			this.$(".widget-block .span9").html(trendsView.render().el);
		}

		return this;
	},

	editRecipe : function(){
		App.currentRouter.navigate("/recipes/" + this.model.id + "/edit", { trigger : true});
	}

});
	