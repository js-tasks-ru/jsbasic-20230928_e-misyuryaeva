function initCarousel() {
   let carouselElement = document.querySelector('.carousel__inner');
   let buttonRight =  document.querySelector('.carousel__arrow_right');
   let buttonLeft =  document.querySelector('.carousel__arrow_left');
   buttonLeft.style.display = 'none';   
   let widthSlide = document.querySelector('.carousel__slide').offsetWidth;
   let i = 0;
   
   buttonRight.addEventListener('click', ()=>{
		 i += 1;	
		 carouselElement.style.transform = 'translateX('+(-widthSlide*i)+'px)';	
     displayButtons();
   });

   buttonLeft.addEventListener('click', ()=>{
		 i -= 1;	
		 carouselElement.style.transform = 'translateX('+(-widthSlide*i)+'px)';
		 displayButtons();     
   });
   
    displayButtons = () => {
	
     if(i == 0){         
 		    buttonLeft.style.display =	'none';			  
      } else {          
		    buttonLeft.style.display =	'';	  
		 };
		
	   if(i == 3){	         
 		    buttonRight.style.display =	'none';			  
      } else {		          
		    buttonRight.style.display =	'';		  
		 };
    };

}
