import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel2').owlCarousel(

        {
            margin:30,
   nav:true,
   autoHeight: false,

   navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#fff"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#fff"/>
   </svg></div>`],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        },
        1400:{
            items:3
        }
    }
        }
    );
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
        margin:20,
          items:2
      },
      600:{
        margin:30,
          items:2
      },
      1000:{
        margin:30,
          items:6
      }
  }
      }
  )

  
//   $('.owl-carousel-example').owlCarousel(

//     {
//         margin:30,
//         autoHeight: true,
// nav:true,

// navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#858585"/>
// </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#858585"/>
// </svg></div>`],




// responsive:{
//     0:{
//         items:1
//     },
//     600:{
//         items:1
//     },
//     1000:{
//         items:1
//     }
// }
//     }
// );
  });
  
  $(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
  
    sync1.owlCarousel({
      items :4 ,
      slideSpeed : 2000,
      margin:30,

      autoHeight: false,
      nav: true,
      // autoplay: true,
      dots: true,
      loop: true,
      responsiveRefreshRate : 200,
       navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#fff"/>
   </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#fff"/>
   </svg></div>`],
      // navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : 1,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: 4, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      navText:[`<div class='nav-btn prev-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.99997 0L10.4617 1.46177L3.95712 7.96639H32.8154V10.0337H3.95712L10.4617 16.5382L8.99997 18L-6.48499e-05 8.99997L8.99997 0Z" fill="#fff"/>
      </svg></div>`,`<div class='nav-btn next-slide'><svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.8155 0L22.3538 1.46177L28.8583 7.96639H0V10.0337H28.8583L22.3538 16.5382L23.8155 18L32.8155 8.99997L23.8155 0Z" fill="#fff"/>
      </svg></div>`],
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
  
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
  });

  window.addEventListener("resize", resizeListener);
  function resizeListener(){
    if(window.innerWidth <= 915 ){
      // console.log(window.innerWidth) 

      $('.category-block').addClass('owl-carousel owl-theme')

      $(document).ready(function(){
        $('.category-block').owlCarousel(
    
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
                items:2
            },
            600:{
                items:3
            },
          
        }
            }
        );
      });
     }
  }
  resizeListener()





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



  // let morebtns = document.querySelectorAll('.more')

  // morebtns.forEach((morebtn) =>{

  //   morebtn.addEventListener('click', function(){
  //   morebtn.parentNode.querySelector('.content').classList.toggle('show')
   
  //   })
  // })
  
 

  // бургер меню

const icons = document.querySelector('.burger');
const header = document.querySelector('menu');

const body = document.querySelector('body');
// icons.forEach (icon => {  
  icons.addEventListener('click', (event) => {
    icons.classList.toggle("open");
    header.classList.toggle("open");
    
    body.classList.toggle("open");

  });
// });


// закрыть меню в адаптиве
if(window.innerWidth <= 1300 ){

  let menu_items = document.querySelectorAll('menu .menu-item')

  menu_items.forEach((item, index) => {
  
    item.addEventListener('click', function(){
  
  
  icons.classList.toggle("open");
  header.classList.toggle("open");
  
  body.classList.toggle("open");
    })
  
  })
}




// маска тел
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});



// let list_stage = document.querySelectorAll('.stages .hidden_stages-item')
// let list_stage_content = document.querySelectorAll('.stages .stages-block_item')

// list_stage_content[0].classList.add('active')
// list_stage[0].classList.add('active')

// list_stage.forEach((stage, index) => {

//   stage.addEventListener('click', function(){
//     if(stage.classList.contains('active')){
//       // console.log(stage);
//     } else{
//       document.querySelector('.stages .hidden_stages-item.active').classList.remove('active')
//       document.querySelector('.stages .stages-block_item.active').classList.remove('active')
//       stage.classList.add('active')
//       list_stage_content[index].classList.add('active')



//     }
    
//   })
// })


// табы

let tab_control = document.querySelectorAll('.tabs-block .control-item')
let tab_content = document.querySelectorAll('.tabs-block .content-item ')

tab_control[0].classList.add('active')
tab_content[0].classList.add('active')

tab_control.forEach((control, index) =>{
control.addEventListener('click', function(){



if(control.classList.contains('active')){
  console.log(control);
} else{
  // console.log(document.querySelector('tabs-block .control-item.active'));
  document.querySelector('.tabs-block .control-item.active').classList.remove('active')
  document.querySelector('.tabs-block .content-item.active').classList.remove('active')
  control.classList.add('active')
  tab_content[index].classList.add('active')



}
})

})