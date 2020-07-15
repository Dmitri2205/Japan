$(document).ready(function(){
  $(".slider-one").owlCarousel({
        dots:false, 	
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1500, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            }

        }
    });

    $(".slider-two").owlCarousel({
        dots:false,
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:7000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:0
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
            1200:{
            	items:5
            }
        }
    });
});

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop; // Получаем положение скролла
  if(scrolled !== 0){
    // Если прокрутка есть, то делаем блок прозрачным
    document.querySelector('.mobileRow').style.background = 'none';
  }else{
    // Если нет, то делаем его полностью видимым
    document.querySelector('.mobileRow').style.background = 'url(images/headerClouds.png) ';
  };
};