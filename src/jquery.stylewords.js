! function($) {
  $.fn.stylewords = function() {
    return this.each(function() {
      var el = $(this);
      el.html(function() {
        var words = el.text().split(' ');
        var wrapper = $('<span></span>').text(words.shift());
        wrapper = $('<div>').append(wrapper).html();
        return [wrapper].concat(words).join(' ');
      });
    });
  };
}(jQuery);