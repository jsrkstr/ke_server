App.views.TrendsChart = Backbone.View.extend({

	tagName : "div",

	className : "trends-chart",

	events : {
		// bind events..
	},


	initialize : function(args){
		this.model.on("reset",this.render, this);
	},


	render : function(){
		data = this.mode.toJSON();

		var categories = data.series;
		var all_series = [];

		for(var key in data.values){
			var series = {
				name : key,
				data : data.values[key]
			}

			all_series.push(series);
		}


		this.chart = new Highcharts.Chart({

	        chart: {
	            renderTo: this.el,
	            type: 'line'
	        },
	        title: {
	            text: 'Events Overview'
	        },
	        xAxis: {
	            categories: categories,	        },
	        },
	        series: all_series,
	    });

		return this;
	}

});
	