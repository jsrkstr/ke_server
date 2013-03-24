App.views.TrendsChart = Backbone.View.extend({

	tagName : "div",

	className : "trends-chart",

	events : {
		// bind events..
	},


	initialize : function(args){
		this.model.on("change",this.render, this);
	},


	render : function(){
		data = this.model.toJSON();

		var categories = data.series;
		var all_series = [];

		for(var key in data.values){
			var series = {
				name : key,
				data : data.values[key]
			}

			all_series.push(series);
		}

		setTimeout($.proxy(function() {
			
			this.chart = new Highcharts.Chart({

		        chart: {
		            renderTo: this.el,
		            type: 'line'
		        },
		        title: {
		            text: 'Events Overview'
		        },
		        xAxis: {
		            categories: categories
		        },
		        series: all_series
		    });

	    },this), 100);

		return this;
	}

});
	