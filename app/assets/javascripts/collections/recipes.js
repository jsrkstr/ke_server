App.collections.Recipes = Backbone.Collection.extend({


	url : "/recipes",

	
	model : App.models.Recipe,


	initialize : function(args){
		// do something...
	},


	fetchOnce : function(){
		if(!this.fetchedOnce){
			this.fetch();
			this.fetchedOnce = true; 
		}
	}

	// comparator : function(model){
	// 	return // some attr...;
	// }


});
