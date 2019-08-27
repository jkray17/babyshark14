$(document).ready(function () {
    // svg4everybody(rawopts: {}); разобраться шо за хрень

    var sandwich = function () {
        $(document).on('click', '.sandwich', function () {
            $(this).toggleClass('sandwich--active');

        });
		};
    
    var popularCategoriesSlider = function () {
    	if ($(window).width() < 768){
    		$('.js-categories-prev').slick({
	    		slidesToShow: 2,
	    		slidesToScroll: 2,
	    		// fade: true
    		});
    	
    	};
    };

    sandwich();
    popularCategoriesSlider();
});

// При изменении экрана вкл/выкл слайдер
var popularCategoriesSlider = function () {
	// var sliderElement = $('.js-categories-prev');
	if ($(window).width() < 768 && !($('.js-categories-prev').hasClass('slick-initialized'))) {
		$('.js-categories-prev').slick({
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		// fade: true
		})
	} else if ($(window).width() > 768 && $('.js-categories-prev').hasClass('slick-initialized')) {
			$('.js-categories-prev').slick('unslick')
	
	};
};

$(window).on('resize', function () {
	popularCategoriesSlider();
});

// Фикс меню вверху при прокрутке
$(document).ready(function(){
    var nav = $('.header-main');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 70) {
            nav.addClass('fix-top');
        } else {
            nav.removeClass('fix-top');
        }
    });
});