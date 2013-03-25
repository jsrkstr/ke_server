App.views.RecipeTrendsChart = Backbone.View.extend({

	tagName : "div",

	className : "trends-chart",

	events : {
		// bind events..
	},


	initialize : function(args){
		this.collection.on("reset",this.render, this);
	},


	render : function(){
		actionTrends = this.collection.toJSON();

		var categories = []; // ["action 1", "action 2"]

		for (var i = 0; i < actionTrends.length; i++) {
			categories.push("Action " + (i+1));
		};

		var all_series = [];

		for(var eventName in actionTrends[0].values){
			var series = {
				name : eventName,
				data : _.map(actionTrends, function(actionTrend){
					return actionTrend.values[eventName][0]
				})
			};

			all_series.push(series);
		}


		setTimeout($.proxy(function() {

			this.chart = new Highcharts.Chart({

		        chart: {
		            renderTo: this.el,
		            type: 'column'
		        },
		        legend : false,
		        title: false,
		        xAxis: {
		            categories: categories,
		    //         labels: {
		    //         	formatter : function() {
						// 	return App.dateFormat(this.value).format("d mmm");
						// }
		    //         }
		        },
		        yAxis: {
		        	title : false
		        },
		        series: all_series
		    });

		},this), 100);

		return this;
	}

});
	

// code for comparision chart not funnel

// actionTrends = this.collection.toJSON();

// var categories = ["Sent", "Delivered", "Ignored", "Opened"];

// var all_series = [];

// for (var i = 0; i < actionTrends.length; i++) {

// 	var series = {
// 		name : "Action " + (i + 1),
// 		data : [actionTrends[i].values["sent"][0], actionTrends[i].values["delivered"][0], actionTrends[i].values["ignored"][0], actionTrends[i].values["opened"][0] ]
// 	};

// 	all_series.push(series);
// }
