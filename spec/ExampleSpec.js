describe("Example", function() {

  it("Should return true when called", function() {
    expect(someFunction()).toBeTruthy();
  });

  it("Should return false when called", function() {
    expect(otherFunction()).toBeFalsy();
  });

  it("Returns an array of names", function() {
    expect(arrayFunction()).toContain('jeffrey');
    expect(arrayFunction()).not.toContain('john');
  });

  describe("User", function() {

    it("Should ensure that the user is 21 or older", function() {
      expect(User.getAge()).toBeGreaterThan(20);
    });
  });

});