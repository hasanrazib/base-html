$(document).ready(function() {
	
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >=30) {
        $(".main-navigation-area").addClass("stcik");
        
    }else {
        $(".main-navigation-area").removeClass("stcik");
        
    }
});

 $('#nav').slicknav({
      prependTo: '.mobile-menu',
      label: '',

    });  

jQuery('.count').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: jQuery(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            jQuery(this).text(Math.ceil(now));
        }
    });
});

			
jQuery('.latest-news-item').matchHeight({
    property: 'height'
});

 jQuery(".search-card img").click(function(){
    $(".search-box").toggle();
  });




		
});



	var swiper = new Swiper('#main-sli', {
	autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      }, 
	   effect: 'fade',
	 slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
 



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	