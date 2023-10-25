function toggleText() {
  let buttonElement =  document.querySelector('.toggle-text-button');
  let textElement =  document.getElementById('text');
  
  buttonElement.addEventListener('click', ()=>{
   if(textElement.hidden) {
     textElement.hidden = false;
   } else {
     textElement.hidden = true;
   }     
	});
}
