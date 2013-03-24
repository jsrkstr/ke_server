// Fake Ajax calls

// save ref to original method
Backbone.originalSync = Backbone.sync;

// override sync
Backbone.sync = function(method, model, options) {

  var key = _.isFunction(model['url']) ? model['url']() : model['url'];

  // if(method == "create"){
  //   var id =  parseInt(Math.random() * 100000);
  //   res = _.extend(model.toJSON(), { id : id})
  //   key = key + "/" + id;
  //   localStorage.setItem(key, JSON.stringify(res));
  //   options.success(model, res, options);
  //   var recipes = JSON.parse(localStorage.getItem("/recipes"));
  //   recipes.push(res);
  //   localStorage.setItem("/recipes", JSON.stringify(recipes))
  // } else if(method == "read"){
  //   var res = localStorage.getItem(key);
  //   var res = res ? JSON.parse(res)  : res;
  //   options.success(model, res, options);
  // } else
  //   Backbone.originalSync(method, model, options);

  if(key == "/recipes"){
  	var res = [{"segment":{"operator":"and","rules":[{"operator":"and","rules":[{"selector_id":1,"property_id":0,"event_id":1,"filters":[{"type":"primary","operator_id":1,"operands":[{"value":"sport","is_percentage":false},{"value":"cricket","is_percentage":false}]}]},{"selector_id":2,"property_id":1,"event_id":0,"filters":[{"type":"primary","operator_id":1,"operands":[{"value":"30","is_percentage":false},{"value":"","is_percentage":false}]}]}]},{"operator":"and","rules":[{"selector_id":1,"property_id":0,"event_id":2,"filters":[{"type":"primary","operator_id":1,"operands":[{"value":"source","is_percentage":false},{"value":"delhi","is_percentage":false}]}]}]}]},"trends":[{"series":["2013-03-14"],"values":{"sent":[4128],"delivered":[4012],"opened":[1400],"ignored":[2012]}},{"series":["2013-03-14"],"values":{"sent":[3318],"delivered":[3300],"opened":[1105],"ignored":[2195]}}],"id":233,"name":"My First Recipe","enabled":true}]
  	options.success(model, res, options);
  } 
  else if(key == "/recipes/233"){
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
  else if(key == "/trends"){
    var res = {"series":["2013-03-14","2013-03-15","2013-03-16","2013-03-17","2013-03-18","2013-03-19","2013-03-20","2013-03-21"],"values":{"Searched Buses":[4128,4536,3176,2580,3125,3896,1995,3508],"Preprocessed Ticket":[434,537,378,277,400,562,228,502],"Ticket Booked":[165,152,135,127,135,175,100,165]}};
    options.success(model, res, options);
  }
  else 
  	Backbone.originalSync(method, model, options);


};