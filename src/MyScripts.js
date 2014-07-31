var myObj = {
  someMethod: function() {
    $.get('someFile.html', function(data) {
      return data;
    });
  }
};

// Implement a simple jQuery plugin to demonstrate testing async code
$.fn.asyncCall = function() {
  return this.each(function() {
    var el = $(this);
    $.get('someFile.html', function(data) {
      el.html(data);
    });
  });
};