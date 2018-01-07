$(document).on('scroll', function() {
  if($(window).scrollTop()> 300) {
    $('.top').fadeIn();
  }
  else {
    $('.top').fadeOut();
  }
});

$('.top').on('click', function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
});