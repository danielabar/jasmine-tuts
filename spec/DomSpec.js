describe("Experimentation", function() {

  var elem;
  var input;
  beforeEach(function() {
    elem = $('<div id="container" class="main"><p>Hello World</p></div>');
    input = $('<input value=someVal>');
    $('body').append(elem);
  });

  it('Allows searching with CSS selectors', function() {
    expect(elem).toBeInDOM();
    expect(elem).toBeVisible();
    expect(elem).toContainHtml('<p>Hello World</p>');
  });

  it('Detects whether an element has a class', function() {
    expect(elem).toHaveClass('main');
    expect(elem).not.toHaveClass('foo');
  });

  it('Detects whether an element has text', function() {
    expect(elem.children('p')).toHaveText('Hello World');
    expect(elem.children('p').text()).toMatch(/world/i);
  });

  it('Should detect if an input has a value', function() {
    expect(input).toHaveValue('someVal');
  });

});