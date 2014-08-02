describe("jQuery.stylewords", function() {

  var frag;
  beforeEach(function() {
    loadFixtures('stylewords-fragment.html');
    frag = $('#fixture');
  });

  it("Should be available on the jQuery object", function() {
    expect(typeof $.fn.stylewords).toEqual('function');
    expect($.fn.stylewords).toBeDefined();
  });

  it("Should be chainable", function() {
    expect(frag.stylewords()).toBe(frag);
  });

  it("Should wrap a specified number of words within a span tag", function() {
    frag.stylewords();
    expect(frag.find('span').length).toEqual(1);
  });

});