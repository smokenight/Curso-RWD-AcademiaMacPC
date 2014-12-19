$(document).ready(function()
  {
    $('#countdown').countdown(
      {
        date: '11 june 2015 00:00:00',
        format: 'on'
      },
      function()
      {
        // callback function
      }
    );
    
    $(window).load(function()
      {
        $('#slider').nivoSlider();
      }
    );
    
    var offset = 220;
    var duration = 500;
    $(window).scroll(function()
      {
        if($(this).scrollTop() > offset)
        {
          $('.back-to-top').fadeIn(duration);
        }
        else
        {
          $('.back-to-top').fadeOut(duration);
        }
        
        if($(this).scrollTop() > 1)
        {
          $('header').addClass('sticky');
        }
        else
        {
          $('header').removeClass('sticky');
        }
      }
    );
    
    $('.back-to-top').click(function(e)
      {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
      }
    );
    
    $(function()
      {
        $('a[href*=#]:not([href=#])').on('click tap', function()
          {
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
            {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if(target.length)
              {
                $('html,body').animate({scrollTop: target.offset().top - $('header').outerHeight()}, 1000);
                return false;
              }
            }
          }
        );
      }
    );
  }
);