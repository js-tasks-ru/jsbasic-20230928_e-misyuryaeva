function truncate(str, maxlength) {
  if(str.length > maxlength) {
    
    let truncStr = str.substr(0, maxlength - 1);
    str = truncStr + "…";	 
 
 } 
   return str;

}
