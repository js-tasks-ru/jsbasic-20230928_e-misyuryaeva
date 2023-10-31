function getMinMax(str) {
  
  let arr = str.split(' ');
  
  let min = arr.find(item => !isNaN(Number(item)));
 
  let max = arr.find(item => !isNaN(Number(item)));
  
  arr.forEach(function(item, index, array){
	if( Number(item) < min ){
       min = item;
    };
  
    if( Number(item) > max ) {
       max = item;
    };  
  })
  let result = {
  "min": Number(min),
  "max": Number(max),
  };
  
  return result;
  
}
