var recipes = {}; 

var updateObjectWithKeyAndValue = function (object, key, value){
return Object.assign({}, object, { [key]: value }); 
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key] = value; 
  return object; 
}

var deleteFromObjectByKey = function(object, key){
  Object.assign({}, object)
  delete object.key; 
  return object; 
  
}

