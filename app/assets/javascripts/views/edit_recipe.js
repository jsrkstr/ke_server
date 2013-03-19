App.views.EditRecipe = Backbone.View.extend({

	el : ".edit-recipe-screen .form",

	template : _.template($("#edit-recipe-templ").html()),


	events : {
		// bind events..
	},


	initialize : function(args){
		this.on("reset",this.render,this);

		// the one and only rule group
		// collection
		this.ruleGroups = new App.collections.RuleGroups();


		// model that contains a collection
		// var ruleGroup = new App.models.RuleGroup();

		// this.ruleGroups.add(ruleGroup);

	},


	render : function(){

		this.$el.html(this.template(this.model.toJSON()));
		
		this.ruleGroups.reset(this.model.get("segment").rules);
		this.ruleGroups.defaults.operator = this.model.get("segment").operator;

		var view = new App.views.RuleGroups({ collection : this.ruleGroups });
		this.$(".user-segment-form .widget-block").html(view.render().el);
		
		return this;
	}

});
	