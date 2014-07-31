describe("Learning about spies", function() {

  it("Replaces the function it is spying on", function() {
    // spyOn(myObj, 'someMethod').and.returnValue('hello there');
    spyOn(myObj, 'someMethod').and.callFake(function() {
      return 'hello there';
    });
    expect(myObj.someMethod()).toBe('hello there');
    expect(myObj.someMethod).toHaveBeenCalled();
  });

  it("Makes async calls easier to work with", function() {
    spyOn($, 'ajax');
    setFixtures( sandbox() );

    // imagine that asyncCall is a jQuery plugin,
    // that makes an asynchronous call to a service,
    // then populates list items within the container
    $('#sandbox').asyncCall();

    // $.ajax.calls.mostRecent().args has reference to the ajax call arguments
    // Trigger the success handler here, synchronously
    $.ajax.calls.mostRecent().args[0].success('<li>one</li><li>two</li>');
    expect( $('#sandbox').find('li').length).toBe(2);
  });

});