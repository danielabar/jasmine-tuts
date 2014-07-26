describe('Calculator', function() {

  beforeEach(function() {
    Calculator.reset();
  });

  it('Should reset the current value to zero', function() {
    Calculator.current = 20;
    expect(Calculator.reset()).toEqual(0);
  });

  describe('When adding numbers', function() {

    it('Should add numbers', function() {
      expect(Calculator.add(5)).toEqual(5);
      expect(Calculator.add(5)).toEqual(10);
    });

    it('Should store the current value at all times', function() {
      expect(Calculator.current).toBeDefined();
      expect(Calculator.current).toEqual(0);
    });


    it('Should add any number of numbers', function() {
      expect(Calculator.add(1, 2, 3)).toEqual(6);
      expect(Calculator.add(1, 2, 3, 4)).toEqual(16); // because started at 6
    });

  });

  describe('When subtracting numbers', function() {

    it('Should subtract any number of numbers', function() {
      expect(Calculator.subtract(5)).toEqual(-5);
    });

  });

});