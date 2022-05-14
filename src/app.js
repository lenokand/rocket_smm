import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(

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
