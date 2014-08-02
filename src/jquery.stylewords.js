! function($) {

  $.fn.stylewords = function(numwords, config) {
    numwords = numwords || 1;
    config = $.extend({}, $.fn.stylewords.defaults, config);

    return this.each(function() {
      var el = $(this);
      el.html(function() {
        var words = el.text().split(' ');
        var wrapOpts = {
          'class': config['class']
        };

        var wrapper = $(config.tag, wrapOpts).text(words.splice(0, numwords).join(' '));
        wrapper = $('<div>').append(wrapper).html();
        return [wrapper].concat(words).join(' ');
      });
    });

  };

  $.fn.stylewords.defaults = {
    tag: '<span>',
    'class': 'stylewords'
  }

}(jQuery);