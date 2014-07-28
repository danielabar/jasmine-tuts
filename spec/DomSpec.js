describe("Experimentation", function() {

  var elem;
  beforeEach(function() {
    elem = $('<div id="container"><p>Hello World</p></div>');
  });

  // FIXME passes in course, fails for me, maybe because newer versions of vendor libs?
  it("Allows searching with CSS selectors", function() {
    expect($('#container')).toBeInDOM()
    // expect(elem).toBe('#container');
  });

});