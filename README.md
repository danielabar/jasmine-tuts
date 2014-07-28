# jasmine-tuts

> Learning [Jasmine](http://jasmine.github.io/2.0/introduction.html)
with TutsPlus course [Javascript Testing with Jasmine](https://courses.tutsplus.com/courses/javascript-testing-with-jasmine)

## Getting Started

Clone this repo, then run

  ```bash
  npm install
  bower install
  ```

## Run tests manually
* Launch a server from the root of your project directory

  ```bash
  open http://localhost:8000 && python -m SimpleHTTPServer
  ```
* Click on `SpecRunner.html` from the directory listing displayed in the browser

## Run tests automatically and continuously

  ```bash
  grunt
  ```

This runs the tests in PhantomJS against a local connect server.
It also watches the source and tests for changes and will automatically re-run the tests on any change.

### Jasmine equality matchers

[Examples](spec/CalculatorSpec.js)

### Other matchers

[Examples](spec/ExampleSpec.js)

### Using jQuery with Jasmine

See [jasmine-jquery](https://github.com/velesin/jasmine-jquery)

[Examples](spec/DomSpec.js)