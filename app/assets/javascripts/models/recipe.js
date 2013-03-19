App.models.Recipe = Backbone.Model.extend({

	defaults : {
		name : "New Recipe",
		segment : {"operator":"and","rules":[{"operator":"and","rules":[{"selector_id":1,"property_id":0,"event_id":0,"filters":[]}]}]}
	},

	validate : function(attrs){
		 // check attrs... return error to fail validation..
	},


	initialize : function(args){
		// do something...
	}

});