App.models.RuleGroup = Backbone.Model.extend({

	defaults : {
		operator : "and"
	},

	initialize : function(args){
		// this.collection = new (Backbone.Collection.extend({ operator : "and"}));
		this.collection = new Backbone.Collection(args["rules"]);
		// this.collection.defaults.operator = args["operator"];

		this.oToJSON = this.toJSON;
		this.toJSON = this.newToJSON;
	},


	add : function(ruleGroup){
		this.collection.add(ruleGroup);
	},

	newToJSON : function(){
		var rules = this.collection.toJSON();
		return {
			operator : this.defaults.operator,
			rules : rules
		}
	}

});
	