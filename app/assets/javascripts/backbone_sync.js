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
  	var res = {"id":1,"selector_id":1,"event_id":2,"filters":[{"operator_id":1,"operands":[{"value":"destination","is_percentage":false},{"value":"delhi","is_percentage":false}]},{"operator_id":2,"operands":[{"value":"event_count","is_percentage":false},{"value":10,"is_percentage":true}]}]};
  	options.success(model, res, options);
  }
  else 
  	Backbone.originalSync(method, model, options);


};