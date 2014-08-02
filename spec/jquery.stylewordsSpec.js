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

  it("Defaults to wrapping only one word", function() {
    frag.stylewords();
    expect(frag.find('span').text()).toEqual('Lorem');
  });

  it("Allows user to specify number of words to be wrapped", function() {
    frag.stylewords(3);
    expect(frag.find('span').text()).toEqual('Lorem ipsum dolor');
  });

  it("Offers a defaults object on the stylewords namespace", function() {
    expect($.fn.stylewords.defaults).toBeDefined();
  });

  it("Allows the user to override the defaults", function() {
    frag.stylewords(2, {
      id: 'some-id',
      'class': 'some-class',
      tag: '<strong>'
    });
    expect(frag.find('strong').length).toEqual(1);
    expect(frag.find('strong').text()).toEqual('Lorem ipsum');
  });

  it("Applies a default class of stylewords to the wrapper", function() {
    frag.stylewords();
    expect(frag.find('span')).toHaveClass('stylewords');
  });

});