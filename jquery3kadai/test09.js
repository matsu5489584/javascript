(function($, window) {
  $(function() {
    	$('#search').jpostal({
        click : '#search',
        postcode : [
            '#zip1'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
      });
  });
})(jQuery, window);
