// init wow
// wow.js init
  
wow = new WOW(
{
    animateClass: 'animated',
    offset: 100
}
);
wow.init();
  

//bootstrap carousel touch enabler

$('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});

// counters
$('.counter').each(function() {

    var $this = $(this),
        countTo = $this.attr('data-count');
        delayTime = $this.attr('data-count-delay')
    $({ countNum: $this.text()}).delay(delayTime).animate({
      countNum: countTo
    },
    {
      duration: 2000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });  
  });


// testimonials carousel
$(document).ready(function(){
  $('.testimonial-carousel').slick({
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  });
});
