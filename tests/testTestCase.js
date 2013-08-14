
/// \file  TidBits_Javascript/tidbits/unitTesting/testTestCase.js
/// \brief Unit test code for TestCase

/** \file  TidBits_Javascript/tidbits/unitTesting/testTestCase.js
 *  Header file needed to run the automated unit tests on the UnitTesting tidbit
 *  Inspired by code from the Flood3 Library by Roberto Lopez.
 *  http://www.cimne.com/flood/
 *  Flood3 is under GNU Lesser General Public License
 *
 *
 *  To understand the OOP syntax used to create this class, read: https://github.com/najamelan/TidBits_Javascript_OoJs
 *
 *
 *  These tests are using this unit testing framework to test itself.
 *  There is some paradox in this because if the framework does not function correctly
 *  the results of these tests will not be reliable. However, the chance of this code
 *  accidently outputting a sensible result with no tests failed if there are any bugs
 *  is rather small, so it is still useful to run them and better than nothing.
 *
 */


var TidBits = TidBits || {} // our namespace


if( 'undefined' !== typeof module )
{
	TidBits.TestCase = require( '../TestCase.js'     ).TestCase
	TidBits.OoJs     = require( '../../OoJs/oojs.js' ).OoJs
}


;( function class_Test_TestCase( namespace )
{

'use strict';

if( namespace[ "Test_TestCase" ] ) return

    namespace.Test_TestCase = Test_TestCase
var Static                  = TidBits.OoJs.setupClass( namespace, "Test_TestCase", "TestCase" )




function Test_TestCase()
{
	// Virtual methods
	//
	this.Private( this.Virtual( runTestCase ) )


	this.Protected
	(
		  testConstructor
		, testAssertTrueTrueLiteral
		, testAssertTrueFalseLiteral
		, testAssertFalseTrueLiteral
		, testAssertFalseFalseLiteral
	)


	return this.Public( "assertTrue", "assertFalse" )
}



/*--------------------------------------------------------------
*
* The Tests
*--------------------------------------------------------------*/



// test the constructor

function testConstructor()
{
	this.message += "   test constructor default values\n";

	var test = new Test_TestCase();


	this.assertTrue
	(
		  test.getMessage().length  === 0
		, "this.message.length wasn't empty"  + test.getMessage().length
	)


	this.assertTrue
	(
		  test.getTestsCount() === 0
		, "this.testCount wasn't zero" + test.getTestsCount()
	)


	this.assertTrue
	(
		  test.getTestsPassedCount() === 0
		, "this.testsPassedCount wasn't zero" + test.getTestsPassedCount()
	)


	this.assertTrue
	(
		  test.getTestsFailedCount() === 0
		, "this.testsFailedCount wasn't zero" + test.getTestsFailedCount()
	)


	this.assertTrue
	(
		  test.getDisplay() === true
		, "this.display wasn't true" + test.getDisplay()
	)

}


// Pass true to this.assertTrue( bool expr, std::string msg )

function testAssertTrueTrueLiteral()
{
	this.message += "   test pass true  to assertTrue ()\n";

	var test = new Test_TestCase();

	test.assertTrue( true, new Error() );

	this.assertTrue( test.getTestsCount      () === 1, "test.getTestsCount      () wasn't 1" + test.getTestsCount      () )
	this.assertTrue( test.getTestsPassedCount() === 1, "test.getTestsPassedCount() wasn't 1" + test.getTestsPassedCount() )
	this.assertTrue( test.getTestsFailedCount() === 0, "test.getTestsFailedCount() wasn't 0" + test.getTestsFailedCount() )
}




// Pass false to this.assertTrue( bool expr, std::string msg )

function testAssertTrueFalseLiteral()
{
	this.message += "   test pass false to assertTrue ()\n";

	var test = new Test_TestCase();

	test.assertTrue( false, new Error() );

	this.assertTrue( test.getTestsCount      () === 1, "test.getTestsCount      () wasn't 1" + test.getTestsCount      () )
	this.assertTrue( test.getTestsPassedCount() === 0, "test.getTestsPassedCount() wasn't 0" + test.getTestsPassedCount() )
	this.assertTrue( test.getTestsFailedCount() === 1, "test.getTestsFailedCount() wasn't 1" + test.getTestsFailedCount() )
}




// Pass true to assertFalse( bool expr, std::string msg )

function testAssertFalseTrueLiteral()
{
	this.message += "   test pass true  to assertFalse()\n";

	var test = new Test_TestCase();

	test.assertFalse( true, new Error() );

	this.assertTrue( test.getTestsCount      () === 1, "test.getTestsCount      () wasn't 1" + test.getTestsCount      () )
	this.assertTrue( test.getTestsPassedCount() === 0, "test.getTestsPassedCount() wasn't 0" + test.getTestsPassedCount() )
	this.assertTrue( test.getTestsFailedCount() === 1, "test.getTestsFailedCount() wasn't 1" + test.getTestsFailedCount() )
}




// Pass false to assertFalse( bool expr, std::string msg )

function testAssertFalseFalseLiteral()
{
	this.message += "   test pass false to assertFalse()\n";

	var test = new Test_TestCase();

	test.assertFalse( false, new Error() );

	this.assertTrue( test.getTestsCount      () === 1, "test.getTestsCount      () wasn't 1" + test.getTestsCount      () )
	this.assertTrue( test.getTestsPassedCount() === 1, "test.getTestsPassedCount() wasn't 1" + test.getTestsPassedCount() )
	this.assertTrue( test.getTestsFailedCount() === 0, "test.getTestsFailedCount() wasn't 0" + test.getTestsFailedCount() )
}



// Runs all tests

function runTestCase()
{
	this.message += "\nRunning testcase for class TestCase...\n";

	// Constructor and destructor methods

	this.testConstructor()


	// Unit testing methods

	this.testAssertTrueTrueLiteral()
	this.testAssertTrueFalseLiteral()
	this.testAssertFalseTrueLiteral()
	this.testAssertFalseFalseLiteral()
}


})( TidBits );


if( 'undefined' !== typeof module )
{
	var test = new TidBits.Test_TestCase();
	console.log( test.getResults() );

	process.exit( test.getTestsFailedCount() );
}


