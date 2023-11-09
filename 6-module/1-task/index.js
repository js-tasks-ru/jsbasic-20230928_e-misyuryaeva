/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {  
		
		this.render(rows);
		this.addEventListener();	
	
    }
	
	render(rows){
		let table = document.createElement( 'table' );
		table.insertAdjacentHTML( 'afterbegin', 
		  '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead>' );
		let tbody = document.createElement(  'tbody' );
		table.append(tbody); 			
			rows.forEach(function(item, index, array) {
			  tbody.insertAdjacentHTML('beforeend', 
			  '<tr><td>' + item.name + '</td><td>' + item.age + '</td><td>' + item.salary + '</td><td>' + item.city + '</td><td><button>x</button></td></tr>');
			});	
		this.table =  table;	
	}
	
   addEventListener(){
    let buttons = this.table.querySelectorAll('button');
	  buttons.forEach( function removeTr(button) {		
		button.addEventListener('click', (event) => {	
		   let btn = event.currentTarget;
		   let tr = btn.closest('tr');
		   tr.remove();	
		  });
	  });
   }
     
   get elem() {
     return this.table;
    } 
}
