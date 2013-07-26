#!/usr/bin/env node

/// \file  TidBits_Javascript/tidbits/unit_testing/testTestCase.js
/// \brief Unit test code for TestCase

/** \file  TidBits_Javascript/tidbits/unit_testing/testTestCase.js
 *  Header file needed to run the automated unit tests on the UnitTesting tidbit
 *  Inspired by code from the Flood3 Library by Roberto Lopez.
 *  http://www.cimne.com/flood/
 *  Flood3 is under GNU Lesser General Public License
 *
 *
 *  These tests are using this unit testing framework to test itself.
 *  There is some paradox in this because if the framework does not function correctly
 *  the results of these tests will not be reliable. However, the chance of this code
 *  accidently outputting a sensible result with no tests failed if there are any bugs
 *  is rather small, so it is still useful to run them and better than nothing.
 *
 */

// TODO complete documentation


TidBits = require( './unitTesting.js' );


( function( namespace )
{
	'use strict';

	var Class_Test_TestCase    = function(){}; // easy finding with the outliner of your editor

	var   __class__            = 'Test_TestCase';
	var     Class              = namespace[ __class__ ]
										= function(){ return constructor.apply( this, arguments ); }
										;

	extend( Class, TidBits.TestCase );


	var constructor = function()
	{
		// public interface
		//
		var that  = this;
		var iFace = new TidBits.TestCase();

		extend( this, iFace );


		// Virtual methods
		//
		this.runTestCase = runTestCase;

		extend( iFace,
		{
			// public methods
			//
			getResults : function() { return that.getResults(); }

		});

		return iFace;
	};



	/*--------------------------------------------------------------
	*
	* The Tests
	*--------------------------------------------------------------*/



	// test the constructor

	function testConstructor()
	{
		this.message += "   test constructor\n";

		var test = new Test_TestCase();

		this.assertTrue( test.members.message.length      === 0   , new Error() );
		this.assertTrue( test.members.testsCount          === 0   , new Error() );
		this.assertTrue( test.members.testsPassedCount    === 0   , new Error() );
		this.assertTrue( test.members.testsFailedCount    === 0   , new Error() );
		this.assertTrue( test.members.display             === true, new Error() );
	}


	// Pass true to this.assertTrue( bool expr, std::string msg )

	function testAssertTrueTrueLiteral()
	{
		this.message += "   test pass true to assertTrue ()\n";

		var test = new Test_TestCase();

		test.assertTrue( true, new Error() );

		this.assertTrue( test.getTestsCount         () === 1, new Error() ) ;
		this.assertTrue( test.getTestsPassedCount   () === 1, new Error() ) ;
		this.assertTrue( test.getTestsFailedCount   () === 0, new Error() ) ;
	}




	// Pass false to this.assertTrue( bool expr, std::string msg )

	function testAssertTrueFalseLiteral()
	{
		this.message += "   test pass false to assertTrue ()\n";

		var test = new Test_TestCase();

		test.assertTrue( false, new Error() );

		this.assertTrue( test.getTestsCount         () === 1, new Error() ) ;
		this.assertTrue( test.getTestsPassedCount   () === 0, new Error() ) ;
		this.assertTrue( test.getTestsFailedCount   () === 1, new Error() ) ;
	}




	// Pass true to assertFalse( bool expr, std::string msg )

	function testAssertFalseTrueLiteral()
	{
		this.message += "   test pass true  to assertFalse()\n";

		var test = new Test_TestCase();

		test.assertFalse( true, new Error() );

		this.assertTrue( test.getTestsCount         () === 1, new Error() ) ;
		this.assertTrue( test.getTestsPassedCount   () === 0, new Error() ) ;
		this.assertTrue( test.getTestsFailedCount   () === 1, new Error() ) ;
	}




	// Pass false to assertFalse( bool expr, std::string msg )

	function testAssertFalseFalseLiteral()
	{
		this.message += "   test pass false to assertFalse()\n";

		var test = new Test_TestCase();

		test.assertFalse( false, new Error() );

		this.assertTrue( test.getTestsCount         () === 1, new Error() ) ;
		this.assertTrue( test.getTestsPassedCount   () === 1, new Error() ) ;
		this.assertTrue( test.getTestsFailedCount   () === 0, new Error() ) ;
	}



	// Runs all tests

	function runTestCase()
	{
		this.members.message += "\nRunning testcase for class TestCase...\n";

		// Constructor and destructor methods

		testConstructor.apply( this );


		// Unit testing methods

		testAssertTrueTrueLiteral    .apply( this );
		testAssertTrueFalseLiteral   .apply( this );
		testAssertFalseTrueLiteral   .apply( this );
		testAssertFalseFalseLiteral  .apply( this );
	}


	function extend( root, props )
	{
		for( var key in props )
		{
			if( props.hasOwnProperty( key ) )

				root[ key ] = props[ key ];
		}

		return root;
	}

})( global );

var test = new Test_TestCase();
console.log( test.getResults() );
