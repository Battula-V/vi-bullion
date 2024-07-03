(function() {
  $(function() {
    $('body').chardinJs();
    $('a[data-toggle="chardinjs"]').on('click', function(e) {
		//alert('1');
      e.preventDefault();
	  
	  return ($('body').data('chardinJs')).toggle();
	  
      if ($('.jumbotron img').is(':visible')) {
        return ($('body').data('chardinJs')).toggle();
      } else {
        return $('.jumbotron img').animate({
          height: 250
        }, 600, function() {
          return ($('body').data('chardinJs')).toggle();
        });
      }
    });
   
  });

}).call(this);
