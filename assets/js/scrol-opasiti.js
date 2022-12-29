$(window).on('scroll', function() {
    var scrollCoef = 0.001;
  
    $('#container').css({
      opacity: $(window).scrollTop() * scrollCoef
    })
  });