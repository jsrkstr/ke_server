App.models.Recipe = Backbone.Model.extend({

	urlRoot : "/recipes",

	defaults : {
		name : "New Recipe",
		enabled : true,
		segment : {"operator":"and","rules":[{"operator":"and","rules":[{"selector_id":1,"property_id":0,"event_id":0,"filters":[]}]}]}
	},

	initialize : function(args){
		this.ruleGroups = new App.collections.RuleGroups(this.get("segment").rules);
		this.on("change:segment", this.onSegmentChange, this);
	},

	onSegmentChange : function(){
		this.ruleGroups.reset(this.get("segment").rules);
		this.ruleGroups.defaults.operator = this.get("segment").operator;
	}

});