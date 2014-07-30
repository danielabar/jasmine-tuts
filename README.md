# jasmine-tuts [![Build Status](https://secure.travis-ci.org/danielabar/jasmine-tuts.png?branch=master)](https://travis-ci.org/danielabar/jasmine-tuts)

> Learning [Jasmine](http://jasmine.github.io/2.0/introduction.html)
with TutsPlus course [Javascript Testing with Jasmine](https://courses.tutsplus.com/courses/javascript-testing-with-jasmine)

## Getting Started

Clone this repo, then

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

### Fixtures

A jasmine fixture is a fragment of html that a test can work with.
These snippets of html are stored in their own files.

By default, jasmine will load fixtures from `spec/javascripts/fixtures` folder, but this behaviour can be overridden.

[Examples](spec/LearningFixtureSpec.js)

#### loadFixtures

Loads a fixture into the DOM

  ```javascript
  loadFixtures('fragment.html');
  ```

#### readFixtures

Read a fixture and return the result as a string, does not load in DOM

  ```javascript
  var fixture = readFixtures('fragment.html');
  ```

#### setFixtures

Read in html string instead of file, and append it to the dom

  ```javascript
  setFixtures('<div class="sandbox">hello there</div>');
  ```

#### Sandbox

Create an HTML fragment and wrap it in jQuery

  ```javascript
  var sb = sandbox();   // [<div id="sandbox"></div>]
  ```

#### Spies

[Doc](https://github.com/pivotal/jasmine/wiki/Spies)

A spy _replaces_ the function it is spying on.