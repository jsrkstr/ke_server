App.models.RuleOptions = Backbone.Model.extend({

	defaults : {
		// defaults...
	},

	initialize : function(args){
		this.on("reset", this.makeCollections, this);
	},

	makeCollections : function(){
		App.currentOperators.reset(this.get("operators"));
		App.currentAppEvents.reset(this.get("events"));
		App.currentAppUserProperties.reset(this.get("properties"));
	}

});
	