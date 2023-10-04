function factorial(n) {
  
  let result;
	
	if(!n) {
	
	return result = 1;
	
	} else {
	
		result = n;
		let i = n - 1;
		
		for(i; i > 1; i--) {
        
			result *= i;
      
		}
	}
    return result;
}
