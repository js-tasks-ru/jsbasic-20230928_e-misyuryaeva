function hideSelf() {
  let buttonElement =  document.querySelector('.hide-self-button');
   buttonElement.addEventListener('click', ()=>{
     	  buttonElement.hidden = true;
		  alert( 'bh' + buttonElement.hidden );	
	});
}
