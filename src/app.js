import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel2').owlCarousel(

        {
            margin:30,
   nav:true,

   navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#858585"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#858585"/>
   </svg></div>`],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
        }
    );
  });
$(document).ready(function(){
    $('.owl-carousel-choise').owlCarousel(

        {
            margin:30,
   nav:true,

   navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#858585"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#858585"/>
   </svg></div>`],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
        }
    );
  });



  // кнопка наверх

    //  Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    
    function backToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });

    }


    // запрет перемещения модального окна
if(document.querySelector('[href="#modal-call"]')){
    const filterGallary2 = Fancybox.bind('[href="#modal-call"]', {
      // closeButton: "top",
      dragToClose: false,
      // Thumbs: false,
      // Carousel: {
      //     Dots: false,
      // },
    });
    
  }