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
	
 


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 9000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	