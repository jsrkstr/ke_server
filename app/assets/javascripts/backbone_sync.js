// Fake Ajax calls

// save ref to original method
Backbone.originalSync = Backbone.sync;

// override sync
Backbone.sync = function(method, model, options) {

  var key = _.isFunction(model['url']) ? model['url']() : model['url'];

  if(key == "/recipes"){
  	var res = [{"id":1,"selector_id":2,"property_id":3,"filters":[{"operator_id":1,"operands":[{"value":"age","is_percentage":false},{"value":"20","is_percentage":false }] }] }];
  	options.success(model, res, options);
  } 
  else if(key == "/recipes/1"){
  	var res = { segment : {"operator":"and","rules":[{"operator":"and","rules":[{"selector_id":1,"property_id":0,"event_id":1,"filters":[{"type":"primary","operator_id":1,"operands":[{"value":"sport","is_percentage":false},{"value":"cricket","is_percentage":false}]}]},{"selector_id":2,"property_id":1,"event_id":0,"filters":[{"type":"primary","operator_id":1,"operands":[{"value":"30","is_percentage":false},{"value":"","is_percentage":false}]}]}]},{"operator":"and","rules":[{"selector_id":1,"property_id":0,"event_id":2,"filters":[{"type":"primary","operator_id":1,"operands":[{"value":"source","is_percentage":false},{"value":"delhi","is_percentage":false}]}]}]}]}};
  	options.success(model, res, options);
  }
  else if(key == "/ruleOptions"){
    var res = {
      events : [{id : 1,name : "Liked",properties : ["sport", "created_at"]}, {id : 2,name : "Searched",properties : ["source", "destination", "date", "passengers", "created_at"]}, {id : 3,name : "Fooed",properties : ["source", "destination", "date", "passengers", "created_at"]}],
      attributes : [{id : 1,name : "username"},{id : 2,name : "age"},{id : 3, name : "last_seen_at"}],
      operators : [{"id":1,"name":"equals"},{"id":2,"name":"does not equal"},{"id":3,"name":"less than"},{"id":4,"name":"greater than"},{"id":5,"name":"contains"},{"id":6,"name":"does not contain"},{"id":7,"name":"is set"},{"id":8,"name":"is not set"},{"id":9,"name":"times","curation":true},{"id":10,"name":"% of times","curation":true}]
    };
    options.success(model, res, options);
  }
  else 
  	Backbone.originalSync(method, model, options);


};