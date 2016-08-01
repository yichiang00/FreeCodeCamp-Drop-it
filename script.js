
function dropElements(arr, func) {
  // Drop them elements.
var result=arr.filter(func);
if(result.length>0){
  var place =arr.indexOf(result[0]);
  result=arr.splice(place);
}
return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
