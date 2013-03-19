App.views.Rule = Backbone.View.extend({

	tagName : "div",

	className : "rule",
	
	template : _.template($("#rule-templ").html()),


	events : {
		"change"	: "changeAttribute",
		"click .main-selector .expander"	: "addPrimaryFilter",
		"click .primary-filter .expander"	: "addCurationFilter",
		"click .options.pull-right"	: "reset"
	},


	initialize : function(args){
		this.model.on("change", this.render, this);
	},


	render : function(){
		var events = [{id : 1,name : "Liked",properties : ["sport", "created_at"]},	{id : 2,name : "Searched",properties : ["source", "destination", "date", "passengers", "created_at"]}, {id : 3,name : "Fooed",properties : ["source", "destination", "date", "passengers", "created_at"]}]
		var attributes = [{id : 1,name : "username"},{id : 2,name : "age"},{id : 3,	name : "last_seen_at"}];
		var operators = [{"id":1,"name":"equals"},{"id":2,"name":"does not equal"},{"id":3,"name":"less than"},{"id":4,"name":"greater than"},{"id":5,"name":"contains"},{"id":6,"name":"does not contain"},{"id":7,"name":"is set"},{"id":8,"name":"is not set"},{"id":9,"name":"times","curation":true},{"id":10,"name":"% of times","curation":true}];

		var data = this.model.toJSON();
		_.extend(data, {events : events, attributes : attributes, operators : operators});
		this.$el.html(this.template(data));
		return this;
	},


	changeAttribute : function(e){
		var attr = $(e.target).attr("related-attr");
		var value = e.target.value;
		var data = {};

		// remove filters when event not selected
		if(data.event_id == 0)
			data["filters"] = [];

		// remove filters when selector is changed
		if(attr == "selector_id")
			data["filters"] = [];

		switch(attr){
			case "selector_id" : 
			case "event_id" : 
			case "property_id" :
				data[attr] = parseInt(value);
				this.model.set(data);
				break;
			case "curation_operator_id" :
				var index = 1;
			case "operator_id" : 
				var filterIndex = typeof(index) == "undefined" ? 0 : 1;
				var filters = this.model.get("filters");
				filters[filterIndex].operator_id = parseInt(value);
				data = {filters : filters};
				this.model.set(data);
				this.model.trigger("change");
				break;
			case "curation-operand-1" :
				var index = 0;
				var findex = 1;
			case "primary-operand-1" :
				var index = 0;
			case "primary-operand-2" :
				var operandIndex = typeof(index) == "undefined" ? 1 : index;
				var filterIndex = typeof(findex) == "undefined" ? 0 : findex;

				var filters = this.model.get("filters");
				filters[filterIndex].operands[operandIndex].value = value;
				data = {filters : filters};
				this.model.set(data);
				this.model.trigger("change");
				break;
			case "curation-operand-1-type" :
				var filters = this.model.get("filters");
				filters[1].operands[0].is_percentage = value;
				this.model.set(data);
				this.model.trigger("change");
				break;
		}
		
	},


	// operator + 2 operands
	addPrimaryFilter : function(){
		this.model.set({ filters : [
			{"operator_id":1,"operands":[{value: "", is_percentage : false},{value: "", is_percentage : false}] }
		]});
	},


	// operator + 1 operand
	addCurationFilter : function(){
		var filters = this.model.get("filters");
		filters[1] = {"operator_id":1,"operands":[{value: "", is_percentage : false}] };
		this.model.set({ filters : filters});
		this.model.trigger("change");
	},


	reset : function(){
		this.model.clear({silent : true});
		this.model.set(this.model.defaults);
	}

});
	