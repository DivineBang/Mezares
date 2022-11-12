// Ширина текста в меню
var lis = document.querySelectorAll('ul li');
var li;

for (var i = 0; i < lis.length; i += 1) {
	li = lis.item(i);
  li.style.fontWeight = 700;
  /* получаем дробное значение ширины, иначе получим целое число, округленное в меньшую сторону.
  */
  li.style.width = li.getBoundingClientRect().width + 'px'; 
  li.style.fontWeight = 500;
}


//burger

$(document).ready(function(){
  $('.header-menu').click(function(event){
    $('.menu').toggleClass('active-menu');

  });
});
//slider 1
  
  //варіарнт з нумерацією 
var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  navText:['<img src="assets/img/arrow-left.png">','<img src="assets/img/arrow-right.png">'],
  nav: true,
  dots:true,
  responsive:{
    0:{
        items:1
    },
    690:{
        items:1
    },
    930:{
        items:1
    },
    1110:{
        items:1
    },
    1290:{
        items:1
    },
    1920:{
        items:1
    },
    
  } ,
  });
  owl.on('changed.owl.carousel', function(e) {
    $('.counter').text('0' + ++e.page.index + '|' + '0' + e.item.count)
});

//корзина
document.addEventListener('DOMContentLoaded' ,function (){
  const a = document.querySelector(".basket");
  const b = document.querySelector(".shoping");

  a.addEventListener('click', () => {
    b.classList.toggle('opacity');
  });
});

//tab
 $('.tab-pane').on('click',function(){
  var currTab = $(this).index();

  $('.tab-pane ').removeClass('active-tab');
  $(this).addClass('active-tab');

  $('.tab-text').removeClass(' active-tab');
  $('.tab-text').eq(currTab).addClass(' active-tab');
})   
 

// slider 2 
$('.center').slick({
  centerMode: true,
  centerPadding: '55px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}); 

