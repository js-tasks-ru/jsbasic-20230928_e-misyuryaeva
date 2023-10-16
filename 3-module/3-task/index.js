function camelize(str) {
  let arr = str.split('');
  arr.forEach(function(item, index) {
    if(item == '-') { 
       arr.splice(index, 1);
       let nextUp = arr[index].toUpperCase(); 
       arr.splice(index, 1, nextUp); 
    }
  });
return str = arr.join('');
}
