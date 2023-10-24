function highlight(table) {
  
	let rows = table.rows;
	for (i = 1; i < rows.length; i++) {
	  
	   if (table.rows[i].cells[1].innerHTML < 18) {	
		rows[i].style.textDecoration = 'line-through'; // Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18	 
	   };
	   
	   if (table.rows[i].cells[2].innerHTML == 'm') {	
		rows[i].classList += ' male'; //Проставить класс male/female в зависимости от содержимого ячейки Gender. Если её значение m – класс male, Если её значение f – класс female	 
	   } else if (table.rows[i].cells[2].innerHTML == 'f') {	
		rows[i].classList += ' female'; 	 
	   };
	   
	   let status = table.rows[i].cells[3].getAttribute('data-available')	     
	   if (status == 'true') {	
		 rows[i].classList += ' available'; //проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status. Если её значение true – класс available, если её значение false – класс unavailable.	 
	   } else if (status == 'false'){	
		 rows[i].classList += ' unavailable'; 	 
	   } else {	
		 rows[i].hidden = true;//Проставить атрибут hidden, если атрибута data-available нет 	
	   };	   
	}
}
