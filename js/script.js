$(document).ready(function(){

    $(".circle").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.circle').find('.status').remove();

      $(this).append('<div class="status like text-center"><i class="fa fa-thumbs-up fa-lg"></i> Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.circle:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

   $(".circle").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.circle').find('.status').remove();
    $(this).append('<div class="status dislike"><i class="fa fa-thumbs-down fa-lg"></i> Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.circle:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('Thank you');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});