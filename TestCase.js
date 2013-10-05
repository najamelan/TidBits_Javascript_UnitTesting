/// \file  TidBits_Javascript/UnitTesting/TestCase.js
/// \brief TestCase class to subclass for creating tests

/** \file  TidBits_Javascript/UnitTesting/TestCase.js
 *
 *  Header file needed to create unit tests
 *  Inspired by code from the Flood3 Library by Roberto Lopez.
 *  http://www.cimne.com/flood/
 *  Flood3 is under GNU Lesser General Public License
 *
 *
 * Class TestCase
 * --------------
 *
 * To understand the OOP syntax used to create this class, read: https://github.com/najamelan/TidBits_Javascript_OoJs
 *
 * Usage:
 *
 * For an example, have a look at tests/testTestCase.js
 *
 * 1. Subclass this to create a unit test case.
 *
 * 2. In your subclass, create methods that test something using this.assertTrue or this.assertFalse
 *    you can add to this.message to print a line indicating the test being ran
 *
 * 3. Implement runTestCase to call each of your test methods
 *
 * 4. Instantiate your subclass and run getResults on it. This will call runTestCase and return the results
 *
 *
 */


var TidBits = TidBits || {} // our namespace


if( 'undefined' !== typeof module )
{
	TidBits = require( '../OoJs/oojs.js' )
}


;( function class_TestCase( namespace )
{

'use strict';

if( namespace[ "TestCase" ] ) return


    namespace.TestCase = TestCase
var Static             = TidBits.OoJs.setupClass( namespace, "TestCase" )

Static.Public( assert )


function TestCase()
{
	// data members
	//
	this.testsCount       = 0      ///< Number of performed tests.
	this.testsPassedCount = 0      ///< Number of tests which have passed the test case.
	this.testsFailedCount = 0      ///< Number of tests which have failed the test case.

	this.message          = ''     ///< String with the test case information.
	this.display          = true   ///< True if messages from this class are to be displayed, false otherwise.


	this.Private
	(
		  // Data members
		  //
		  "testsCount"
		, "testsPassedCount"
		, "testsFailedCount"
		, "display"

		  // Methods

		, this.Virtual
		  (
		     runTestCase       // pure virtual actually, you have to override it
		  )
	)


	this.Protected
	(
		   // Data Members
		   //
		   "message"

			// methods
			//
		,  setTestsCount
		,  setTestsPassedCount
		,  setTestsFailedCount
		,  setMessage
		,  setDisplay

		,  assertTrue
		,  assertFalse
	)


	return this.Public
	(
		  getResults

		, getTestsCount
		, getTestsPassedCount
		, getTestsFailedCount
		, getMessage
		, getDisplay
	)
}



// Static Methods
// ==============


// an actual real assert, as we use one
//
function assert( condition, message )
{
	if( !condition )
	{
		throw new Error( message || "Assertion failed" )
	}
}


// Instance Methods
// ================

/// Getters
//
function getTestsCount      (){ return this.testsCount       }
function getTestsPassedCount(){ return this.testsPassedCount }
function getTestsFailedCount(){ return this.testsFailedCount }
function getMessage         (){ return this.message          }
function getDisplay         (){ return this.display          }


/// Simple setters
//
function setMessage( newMessage ){ this.message = newMessage }
function setDisplay( newDisplay ){ this.display = newDisplay }


/// This method sets a new value for the number of tests performed by the test case.
/// @param new_testsCount Number of tests performed.
//
function setTestsCount( newTestsCount )
{
	assert( newTestsCount >= 0, "Can't set testsCount to a negative number: " + newTestsCount )

	this.testsCount = newTestsCount
}


/// This method sets a new value for the number of tests which have passed the test case.
/// @param new_testsPassedCount Number of tests passed.
//
function setTestsPassedCount( newTestsPassedCount )
{
	assert( newTestsPassedCount >= 0, "Can't set testsPassedCount to a negative number: " + newTestsPassedCount )

	this.testsPassedCount = newTestsPassedCount
}


/// This method sets a new value for the number of tests which have failed the test case.
/// @param new_testsFailedCount Number of tests failed.
//
function setTestsFailedCount( newTestsFailedCount )
{
	assert( newTestsFailedCount >= 0, "Can't set testsFailedCount to a negative number: " + newTestsFailedCount )

	this.testsFailedCount = newTestsFailedCount
}




/// This method checks that a condition is true.
/// It increases the number of tests by one.
/// It increases the number of tests passed by one if the condition is true.
/// It increases the number of tests failed by one if the condition is false.
/// It appends to the information message an error message is the condition is not satisfied.
/// @param condition Expression of the condition to be tested.
/// @param error Error object: new Error( "your message to add to the test results" )
//
function assertTrue( condition, message )
{
	++this.testsCount

	if( condition )

		++this.testsPassedCount

	else
	{
		this.message += "\nassert failed:\n"
		this.message += message + "\n\n"
		;++this.testsFailedCount
	}
}


/// This method checks that a condition is false.
/// It increases the number of tests by one.
/// It increases the number of tests passed by one if the condition is false.
/// It increases the number of tests failed by one if the condition is true.
/// It appends to the information message an error message is the condition is not satisfied.
/// @param condition Expression of the condition to be tested.
/// @param error Error object: new Error( "your message to add to the test results" )

//
function assertFalse( condition, message )
{
	this.assertTrue( ! condition, message );
}


/// This method returns the test case results:
/// <ul>
/// <li> Information message.
/// <li> Number of tests performed.
/// <li> Number of tests passed.
/// <li> Number of tests failed.
/// <li> Concluding remarks.
/// </ul>
//
function getResults()
{

	this.runTestCase();

	var result

		= this.message                                + "\n"
		+ "\nTest results:\n"                         + "\n"
		+ "   Tests run   : " + this.testsCount       + "\n"
		+ "   Tests passed: " + this.testsPassedCount + "\n"
		+ "   Tests failed: " + this.testsFailedCount + "\n"



	if( this.testsCount === 0 )

		result += "\nSomething went wrong, nothing got tested."+ "\n";


	else if( this.testsFailedCount === 0 )

		result += "\nTest OK"+ "\n";


	else

		result += "\nTest NOT OK. " + this.testsFailedCount + " tests failed" + "\n";


	return result;
}




// Runs all tests

function runTestCase()
{
	throw new Error( "pure virtual method should not be called" );
}


})( TidBits ); // end of TestCase


if( 'undefined' !== typeof module )

	module.exports = TidBits
;
