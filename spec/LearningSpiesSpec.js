describe("Learning about spies", function() {

  // FIXME error with spyOn
  xit("Replaces the function it is spying on", function() {
    spyOn(myObj, 'someMethod').andReturn('foo');
    expect(myObj.someMethod()).toBe('hello there');
  });

  it('Simple spy test', function() {
    spyOn(foo, 'setBar');
    foo.setBar(123);
    expect(foo.setBar).toHaveBeenCalled()
  });

});