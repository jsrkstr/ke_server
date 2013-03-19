// colleciton of rule groups ( rule group is a collection itself)
App.collections.RuleGroups = Backbone.Collection.extend({

	
	model : App.models.RuleGroup,

	defaults : {
		operator : "and"
	},

	initialize : function(args){
		this.oToJSON = this.toJSON;
		this.toJSON = this.newToJSON;
	},


	newToJSON : function(){
		var rules = this.oToJSON();

		return {
			operator : this.defaults.operator,
			rules : rules
		};
	}


});
	