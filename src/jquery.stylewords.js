! function($) {
  $.fn.stylewords = function() {

    return this.each(function() {
      var words = $(this).text().split(' ');
      var wrapper = $('<span></span>').text(words.shift());
      wrapper = $('<div>').append(wrapper).html();
      $(this).html(function() {
        return [wrapper].concat(words).join(' ');
      });
    });

  };

}(jQuery);