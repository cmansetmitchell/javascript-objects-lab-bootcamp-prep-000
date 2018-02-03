var recipes = {}; 
var updateObjectWithKeyAndValue = function (object, key, value){
return Object.assign({}, object, { [key]: value }); 
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key] = value; 
  return object; 
  
}