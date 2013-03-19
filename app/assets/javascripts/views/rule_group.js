App.views.RuleGroup = Backbone.View.extend({

	tagName : "div",

	className : "rule-group",

	template : _.template($("#rule-group-templ").html()),


	events : {
		"click .add-rule" : "addNewRule",
		"change .group-by-secondary" : "onOperatorChange"
	},


	initialize : function(args){
		this.model.collection.on("add", this.addOne, this);
	},


	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.addAll();
		return this;
	},


	addAll : function(){
		this.model.collection.each(function(rule){
			this.addOne(rule);
		}, this);
	},


	addOne : function(rule){
		var view = new App.views.Rule({model : rule});
		this.$(".all-rules").append(view.render().el);
	},


	addNewRule : function(){
		this.model.add(new App.models.Rule)
	},

	onOperatorChange : function(e){
		var value = $(e.target).val();
		this.model.defaults.operator = value;
	}

});
