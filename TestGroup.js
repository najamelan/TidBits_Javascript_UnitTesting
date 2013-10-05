/// \file  TidBits_Javascript/UnitTesting/TestGroup.js
/// \brief Allows to group a bunch of tests and have their results printed out with a summary

/** \file  TidBits_Javascript/UnitTesting/TestGroup.js
 *
 *
 *
 * Class TestGroup
 * ---------------
 *
 * To understand the OOP syntax used to create this class, read: https://github.com/najamelan/TidBits_Javascript_OoJs
 *
 * Usage:
 *
 * For an example, have a look at tests/testTestGroup.js
 *
 *
 *
 */


var TidBits = TidBits || {} // our namespace


if( 'undefined' !== typeof module )
{
	TidBits = require( './TestCase.js' )
}


;( function class_TestGroup( namespace )
{

'use strict';

if( namespace[ "TestGroup" ] ) return


    namespace.TestGroup = TestGroup
var Static              = TidBits.OoJs.setupClass( namespace, "TestGroup" )


function TestGroup()
{
	// data members
	//
	this.testsCount       = 0      ///< Number of performed tests.
	this.testsPassedCount = 0      ///< Number of tests which have passed the test case.
	this.testsFailedCount = 0      ///< Number of tests which have failed the test case.

	this.message          = ''     ///< String with the test case information.
	this.display          = true   ///< True if messages from this class are to be displayed, false otherwise.
	this.cases            = []     ///< The different test cases or groups we will run when getResults is called


	this.Private
	(
		  // Data members
		  //
		  "testsCount"
		, "testsPassedCount"
		, "testsFailedCount"
		, "display"
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
	)


	return this.Public
	(
		  getResults          ///< run the group, returns the message string
		, register            ///< register testcases or groups to be run by getResults

		, getTestsCount
		, getTestsPassedCount
		, getTestsFailedCount
		, getMessage
		, getDisplay
	)
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



function register( testCase )
{
	this.cases.push( testCase )
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
	for( var i = 0; i < this.cases.length; ++i )
	{
		var   testCase = this.cases[i]
		    , message  = testCase.getResults()


		if( testCase.getDisplay() || testCase.getTestsFailedCount() )

			this.message       += message


		this.testsCount       += testCase.getTestsCount()
		this.testsPassedCount += testCase.getTestsPassedCount()
		this.testsFailedCount += testCase.getTestsFailedCount()
	}


	var summary = '\nTotal Test results:'
	            + '\n\n   Tests run   : ' + this.testsCount
	            + '\n   Tests passed: '   + this.testsPassedCount
	            + '\n   Tests failed: '   + this.testsFailedCount  + '\n'


	if( this.testsCount === 0 )

		summary += '\nSomething went wrong, nothing got tested.'


	else if( this.testsFailedCount === 0 )

		summary += '\nTest Case Group OK'


	else

		summary += '\nTest Case Group NOT OK ― ' +  this.testsFailedCount + ' tests failed'


	return summary + '\n=================================\n' + this.message + '\n=================================\n' + summary
}


})( TidBits ); // end of TestGroup


if( 'undefined' !== typeof module )

	module.exports = TidBits

;

