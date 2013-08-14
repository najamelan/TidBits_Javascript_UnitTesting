TidBits Javascript - UnitTesting
================================

Lightweight Unit testing framework for Javascript, part of the [TidBits Javascript Library](https://github.com/najamelan/TidBits_Javascript).

Provides a very simple Object Oriented unit testing class **TestCase** allowing you to unit test JavaScript code.

Runs on both Nodejs and Browsers, uses only standard ES5, although testing has only been done in Firefox.

## Requirements

- [TidBits OoJs](https://github.com/najamelan/TidBits_Javascript_OoJs) for the object oriented model


## Installation

The easiest way to include this in your project is by adding either TidBits Javascript as a submodule to your repository or if you don't want everything, just make TidBits UnitTesting and TidBits OoJs submodules in the same directory (eg. tidbits).

So, either:

```shell
git submodule add git@github.com:najamelan/TidBits_Javascript.git includes/tidbitsJavaScript
```

or:

```shell
mkdir includes
git submodule add git@github.com:najamelan/TidBits_Javascript_UnitTesting.git includes/OoJs
git submodule add git@github.com:najamelan/TidBits_Javascript_UnitTesting.git includes/UnitTesting
```

### Verify your installation

If you are using Nodejs, run the unit tests:

```shell
cd includes/unitTesting
node tests/testTestCase
```

If you want to test if it works in your browser, open the file *includes/tests/test.htm*

This should output the test results.

## Usage

Usage is straight forward. The class TestCase is tested using it's own infrastructure, so the tests provide an example of usage.

1. Subclass this to create a unit test case.
2. In your subclass, create methods that test something using this.assertTrue or this.assertFalse
   you can add to this.message to print a line indicating the test being ran
3. Implement runTestCase to call each of your test methods
4. Instantiate your subclass and run getResults on it. This will call runTestCase and return the results
