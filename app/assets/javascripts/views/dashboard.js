App.views.Dashboard = Backbone.View.extend({

	template : _.template($("#dashboard-templ").html()),

	el : ".dashboard-screen",

	events : {
		// bind events..
	},


	initialize : function(args){
		this.trendsChartModel = new App.models.TrendsChart();
		this.trendsChartView = new App.views.TrendsChart({model : this.trendsChartModel});
		this.trendsChartModel.fetch();
		App.currentRecipes.on("reset", this.render,this);
	},


	render : function(){
		var data = App.currentRecipes.toJSON(); // recipes array

		var yesterdayTotals = {
			sent : 0,
			opened : 0,
			delivered : 0,
			ignored : 0
		};

		var weekTotals = {
			sent : 0,
			opened : 0,
			delivered : 0,
			ignored : 0
		};

		_.reduce(data, function(memo, recipe){
			for(var eventName in weekTotals){
				if(recipe.trends){
					var values = recipe.trends.values[eventName];
					weekTotals[eventName] += _.sum(values) // all
				}
			}

			return weekTotals;
		}, weekTotals);


		_.reduce(data, function(memo, recipe){
			for(var eventName in yesterdayTotals){
				if(recipe.trends){
					var values = recipe.trends.values[eventName];
					yesterdayTotals[eventName] += values[values.length - 2]; // second last
				}
			}

			return yesterdayTotals;
		}, yesterdayTotals);

		_.extend(data, {
			yesterdayTotals : yesterdayTotals,
			weekTotals : weekTotals
		});
		
		this.$(".widget-block").html(this.template(data));
		this.$(".span8").html(this.trendsChartView.el);
		return this;
	}

});
	