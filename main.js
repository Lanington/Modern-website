jQuery(document).ready(function(){

  "use strict"
   $('.slider').ripples({
      dropRadius: 13,
      perturbance: 0.01,

    });

/* Custom Code */

    $(".text").typed({
     strings:["<strong>Welcome to</strong><strong class='primary'> Business...</strong>","<strong>Can't wait to</strong><strong class='primary'> Assist you !!!</strong>"],
      typespeed:0,
      loop:true

  });

  $(window).scroll(function(){

/* Custom Code */

      var top = $(window).scrollTop();
       if(top>=60){
         $(".nav").addClass('.secondary');
       }

       else
           if($(".nav").hasClass('.secondary')){
               $(".nav").removeClass('.secondary');
           }
   });

   $('.work').magnificPopup({
       delegate: 'a', // child items selector, by clicking on it popup will open
       type: 'image',
       gallery: {
       enabled: true
        }

     });

/* Custom Code */

       $("#team-members").owlCarousel({
          items: 3,
          autoplay: true,
          smartSpeed: 700,
          loop: true,
          autoplayHooverPause: true,
            responsive:{
              0:{

                items:1
              },

              480:{

                items:2
              },

              768:{

                items:3
              }
            }
       });

       $('.counter').counterUp({
                      delay: 10,
                      time: 1000
                  });





});
