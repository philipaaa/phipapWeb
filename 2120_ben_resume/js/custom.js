
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        var target = $anchor.attr('href');

        if (target.startsWith('#') && $(target).length) {
          $('html, body').stop().animate({
              scrollTop: $(target).offset().top - 70
          }, 800);
          event.preventDefault();
        }
      });
    });   

    // Ensure the navbar shadow updates on load
    if ($(window).scrollTop() > 72) {
        $(".navbar").addClass("scroll");
    }

  });
