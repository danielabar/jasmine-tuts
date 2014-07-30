var myObj = {
  someMethod: function() {
    console.log('=== someMethod is called!');
    $.get('someFile.html', function(data) {
      return data;
    });
  }
};

var foo = {
  setBar: function(value) {
    bar = value;
  }
};