$(document).ready(function () {
    // svg4everybody(rawopts: {}); разобраться шо за хрень

    var sandwich = function () {
        $(document).on('click', '.sandwich', function () {
            $(this).toggleClass('sandwich-active');
            document.querySelector(".header").classList.toggle('mob-nav');
            // $(this).toggleClass('sandwich--active');

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
    var nav = $('.header');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 70) {
            nav.addClass('fix-top');
        } else {
            nav.removeClass('fix-top');
        }
    });
});

//********  Forms CALLBACK
// Добывляем стили для эффекта отъезда поля
if(document.getElementById('first-name') & document.getElementById('text-post')){

document.getElementById('first-name').addEventListener('focus', function(){
    this.parentElement.classList.add('focus');
     });

document.getElementById('first-name').addEventListener('blur', function(){
    if (this.value == '') {
            this.parentElement.classList.remove('focus')}
    // else {this.classList.add('scalable')};
     });
document.getElementById('text-post').addEventListener('focus', function(){
    this.parentElement.classList.add('focus');
     });

document.getElementById('text-post').addEventListener('blur', function(){
    if (this.value == '') {
            this.parentElement.classList.remove('focus')}
    // else {this.classList.add('scalable')};
     });
};



// Вызов модального окна с видео
// Доработать под общий вызов универсальный

(function () {

    var modalVideo = document.getElementById('modal');
    // var modalBtnClose = document.querySelector('#modal-close-btn');
    var modalBtnOpen = document.querySelector('[data-key="welcome_video"]');
    var modalBtnClose = document.getElementById('modal-close-btn');
    modalBtnOpen.addEventListener('click',  () => {
        modalVideo.style.display = "block"
    });
    modalBtnClose.addEventListener('click',  () => {
        // document.querySelector('#modal').style.display = "none";
        modalVideo.style.display = "none"
     });
    modalBtnClose.addEventListener('click', function() {
        modalVideo.style.display = "none";
        // выключение плеера при закрытии модокна
        $('#modal-video').each(function(){
            var src = $(this).find('iframe').attr('src');
            console.log(src);

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
            });

        });



    // выключение плеера при закрытии модокна
    // $('#modal-video').each(function(){
    //         var src = $(this).find('iframe').attr('src');
    //         console.log(src);

    //     $(this).on('click', function(){

    //         $(this).find('iframe').attr('src', '');
    //         $(this).find('iframe').attr('src', src);
    //     });
    // });


}());



// Подключаем слайдер slick c JQuery
$('.slider').slick({
    // slidesToShow: 1,
    // arrows: false,
    dots: true,
    dotsClass: 'slider-pagination',
    nextArrow: $('.diamond-icon.next'),
    prevArrow: $('.diamond-icon.prev'),
    // asNavFor: '.slider',
    asNavFor: '.slider, .slider-small',
    appendDots: $('.carousel-controls-inner'),
    // // appendDots: $('.slider-pagination li'),
    // // fade: true,
    // speed: 1000,
    // cssEase: 'linear'
});
$('.slider-small').slick({
    // centerMode: true,
    // centerPadding: '75px',
    // slidesToShow: 1,
    arrows: false,
    asNavFor: '.slider',
    focusOnSelect: true,
    dots: false
});
// **** ring-slider ****
// $('.slider-ring').slick({
//     dots:true,
//     appendDots: $('.slider-options'),
//     dotsClass: '.slider-options',
//     asNavFor: '.slider-list'
// });
// *** Кароч:
// 1. Отслеживаем клик на #option-n
//  var numSlider (цыфра - n из #option-n)
//  присваиваем класс pos-n для '.slider-ring'

(function () {
    var btnOption = document.querySelector(".slider-options").children;
    var positioner = document.querySelector('.slider-ring');
    var  btnNext = document.querySelector('#next-btn');
    var  btnPrev = document.querySelector('#prev-btn');
    let curIndex = 1;
    // curIndex = Number(positioner.classList[2].replace('pos-',''));
    // var rem = positioner.classList[2];
    
    // positioner.classList.remove(positioner.classList[2]);
    // 
    btnNext.addEventListener('click', () => {
        if (curIndex !== btnOption.length) {  
            positioner.classList.remove('pos-' + curIndex);
            curIndex++; 
            positioner.classList.add('pos-' + curIndex);
        }

          else {
            positioner.classList.remove('pos-' + curIndex);
            curIndex = 1;
            positioner.classList.add('pos-' + curIndex);  

              }
                });
    btnPrev.addEventListener('click', () => {
        if (curIndex !== 1) {  
            positioner.classList.remove('pos-' + curIndex);
            curIndex--; 
            positioner.classList.add('pos-' + curIndex);
        }

          else {
            positioner.classList.remove('pos-' + curIndex);
            curIndex = btnOption.length;
            positioner.classList.add('pos-' + curIndex);  

              }
                });

    // setActiveSlide() {
    // };
    // btnOption.addEventListener('click', function(){});
    console.log(btnOption.length);
    console.log("positioner: " + positioner.classList);
    console.log(positioner.classList[2]);
    console.log("curIndex: " + curIndex );
    // console.log(curIndex.replace('p',''));
    // console.log(btnOption[2].id.slice(5));
    console.log(btnOption[2].id.replace('option',''));

}());
// ***********!!!!!!!!!!!!!!!!!!!************
(function () {
    class SlideShow {
        constructor(startIndex, element) {
            this.startIndex = startIndex;
            this.currentIndex = this.startIndex;
            this.element = element;
            this.slides = this.element.querySelectorAll('.slide');
            this.setActiveSlide();
            this.next();
            this.prev();
        }

        setActiveSlide() {
            this.slides.forEach((item, index) => {
                if (index === this.currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })

        }

        next() {
            let nextBtn = this.element.querySelector('[data-way="next"]');
            nextBtn.addEventListener('click', () => {
                if (this.currentIndex === this.slides.length - 1) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
                this.setActiveSlide();
            })

        }

        prev() {
            let prevBtn = this.element.querySelector('[data-way="prev"]');
            prevBtn.addEventListener('click', () => {
                if (this.currentIndex === 0) {
                    this.currentIndex = this.slides.length - 1;
                } else {
                    this.currentIndex--;
                }
                this.setActiveSlide();
            })
        }
    }

    let slideShow = document.querySelectorAll('.slideshow');

    slideShow.forEach(item => {
        new SlideShow(0, item)
    })


}());