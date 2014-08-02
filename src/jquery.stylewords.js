(function($) {
  var stylewords = {

    init: function(el, numwords, config) {
      this.numwords = numwords || 1;
      this.config = $.extend({}, $.fn.stylewords.defaults, config);
      this.el = el;
      this.$el = $(el);
      this.updateHTML();
    },

    updateHTML: function() {
      var self = this;
      this.$el.html(function(i, text) {
        return self.createWrapper(text);
      });
    },

    createWrapper: function(text) {
      var words = text.split(' ');
      var tag = this.config.tag;
      var wrapOpts = {
        'class': this.config['class']
      };
      var wrapper = $(this.config.tag, wrapOpts).text(words.splice(0, this.numwords).join(' '));
      wrapper = $('<div>').append(wrapper).html();
      return [wrapper].concat(words).join(' ');
    }
  };

  $.fn.stylewords = function(numwords, config) {
    var obj = Object.create(stylewords);
    return this.each(function() {
      obj.init(this, numwords, config);
    });
  };

  $.fn.stylewords.defaults = {
    tag: '<span>',
    'class': 'stylewords'
  };
})(jQuery);
