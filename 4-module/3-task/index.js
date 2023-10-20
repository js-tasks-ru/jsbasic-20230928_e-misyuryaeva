function highlight(table) {
  
 let rows = table.rows;
 for (i = 1; i < rows.length; i++) {
   
   	if (table.rows[i].cells[1].innerHTML < 18) {
	
	  rows[i].style.textDecoration = 'line-through'; 
    };
	
	  if (table.rows[i].cells[2].innerHTML == 'm') {
	
	    rows[i].className = 'male'; 
	 
	  } else if (table.rows[i].cells[2].innerHTML == 'f') {
	
	    rows[i].className = 'female'; 
	 
	  };
	
	let status = table.rows[i].cells[3].getAttribute('data-available')
	     
	 if (status == 'true') {
	
	   rows[i].className += ' available'; 
	 
	 } else if (status == 'false'){
	
	   rows[i].className += ' unavailable'; 
	 
	 } else if (status == null)	{
	
	   rows[i].hidden = true;
	
	 };	   
 }
}
