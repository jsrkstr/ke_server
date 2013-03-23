App.views.Dashbaord = Backbone.View.extend({

	// template : $("selector").html(),
	el : ".dashbaord-screen",

	events : {
		// bind events..
	},


	initialize : function(args){
		this.trendsChartModel = new App.models.TrendsChart();
		this.trendsChartView = new App.views.TrendsChart({model : this.trendsChartModel});
		this.trendsChartModel.fetch();
	},


	render : function(){
		this.$(".span6").html(this.trendsChartView.render().el);
		return this;
	}

});
	