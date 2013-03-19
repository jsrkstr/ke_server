App.views.RuleGroups = Backbone.View.extend({

	tagName : "div",

	className : "rule-groups",

	template : _.template($("#rule-groups-templ").html()),

	events : {
		"click .add-rule-group" : "addNewRuleGroup",
		"change .group-by-main" : "onOperatorChange"
	},


	initialize : function(args){
		this.collection.on("add", this.addOne, this);
	},


	render : function(){
		this.$el.html(this.template(this.collection.toJSON()));
		this.addAll();
		return this;
	},


	addAll : function(){
		this.collection.each(function(ruleGroup){
			this.addOne(ruleGroup);
		},this);
	},


	addOne : function(ruleGroup){
		var view = new App.views.RuleGroup({ model : ruleGroup });
		this.$(".all-rule-groups").append(view.render().el);
	},


	addNewRuleGroup : function(){
		this.collection.add(new App.models.RuleGroup);
	},

	onOperatorChange : function(e){
		var value = $(e.target).val();
		this.collection.defaults.operator = value;
	}

});
	