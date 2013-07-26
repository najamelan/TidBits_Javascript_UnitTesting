/*
 * Class TestCase
 *
 * Subclass this to create a unit test case
 *
 */



( function( namespace )
{
	'use strict';

	var Class_TestCase   = function(){}; // allows easy navigation with the outliner of your editor

	var   __class__      = 'TestCase';
	var     Class        = namespace[ __class__ ]
								= function(){ return constructor.apply( this, arguments ); };

	var constructor = function()
	{
		// data members
		//
		this.members =
		{
				testsCount        : 0      ///< Number of performed tests.
			,  testsPassedCount	: 0      ///< Number of tests which have passed the test case.
			,  testsFailedCount	: 0      ///< Number of tests which have failed the test case.

			,  message           : ''     ///< String with the test case information.
			,  display           : true   ///< True if messages from this class are to be displayed, false otherwise.
		};

		// Pure virtual methods
		//
		this.runTestCase = runTestCase;


		// public interface
		//
		var that  = this;
		var iFace = // new Parent(); for inheritance
		{
				// public data members
				//
				members : this.members

				// public methods
				//
			,  getTestsCount       : function(){ return getTestsCount       .apply( that, arguments ); }
			,  getTestsPassedCount : function(){ return getTestsPassedCount .apply( that, arguments ); }
			,  getTestsFailedCount : function(){ return getTestsFailedCount .apply( that, arguments ); }
			,  getMessage          : function(){ return getMessage          .apply( that, arguments ); }
			,  getDisplay          : function(){ return getDisplay          .apply( that, arguments ); }

			,  setTestsCount       : function(){ return setTestsCount       .apply( that, arguments ); }
			,  setTestsPassedCount : function(){ return setTestsPassedCount .apply( that, arguments ); }
			,  setTestsFailedCount : function(){ return setTestsFailedCount .apply( that, arguments ); }
			,  setMessage          : function(){ return setMessage          .apply( that, arguments ); }
			,  setDisplay          : function(){ return setDisplay          .apply( that, arguments ); }

			,  assertTrue          : function(){ return assertTrue          .apply( this, arguments ); }
			,  assertFalse         : function(){ return assertFalse         .apply( this, arguments ); }

			,  runTestCase         : function(){ return runTestCase         .apply( that, arguments ); }
			,  getResults          : function(){ return getResults.apply( this, arguments ); }
		};


		return iFace;
	};



	// Static Methods
	// ==============


	// an actual real assert, as we use one
	//
	function assert( condition, message )
	{
		if( ! condition )
		{
			throw message || "Assertion failed";
		}
	}


	// Instance Methods
	// ================

	/// This method returns the number of tests which have been performed by the test case.
	//
	function getTestsCount()
	{
		return this.members.testsCount;
	}


	/// This method returns the number of tests which have passed the test case.
	//
	function getTestsPassedCount()
	{
		return this.members.testsPassedCount;
	}


	/// This method returns the number of tests which have failed the test case.
	//
	function getTestsFailedCount()
	{
		return this.members.testsFailedCount;
	}


	/// This method returns a reference to the test case information message.
	//
	function getMessage()
	{
		return this.members.message;
	}


	/// This method returns the display messages to the screen value of this object.
	//
	function getDisplay()
	{
		return this.members.display;
	}


	/// This method sets a new value for the number of tests performed by the test case.
	/// @param new_testsCount Number of tests performed.
	//
	function setTestsCount( newTestsCount )
	{
		assert( newTestsCount >= 0 );

		this.testsCount = newTestsCount;
	}


	/// This method sets a new value for the number of tests which have passed the test case.
	/// @param new_testsPassedCount Number of tests passed.
	//
	function setTestsPassedCount( newTestsPassedCount )
	{
		assert( newTestsPassedCount >= 0 );

		this.members.testsPassedCount = newTestsPassedCount;
	}


	/// This method sets a new value for the number of tests which have failed the test case.
	/// @param new_testsFailedCount Number of tests failed.
	//
	function setTestsFailedCount( newTestsFailedCount )
	{
		assert( newTestsFailedCount >= 0 );

		this.members.testsFailedCount = newTestsFailedCount;
	}


	/// This method sets a new test case information message.
	/// @param new_message Information message.
	//
	function setMessage( newMessage )
	{
		this.members.message = newMessage;
	}


	/// This method sets a new display value to this object.
	/// @param new_display Display value.
	//
	function set_display( newDisplay )
	{
		this.members.display = newDisplay;
	}


	/// This method checks that a condition is true.
	/// It increases the number of tests by one.
	/// It increases the number of tests passed by one if the condition is true.
	/// It increases the number of tests failed by one if the condition is false.
	/// It appends to the information message an error message is the condition is not satisfied.
	/// @param condition Expression of the condition to be tested.
	/// @param error Error object: new Error( "your message to add to the test results" )
	//
	function assertTrue( condition, error )
	{
		++this.members.testsCount;

		if( condition )

			++this.members.testsPassedCount;

		else
		{
			this.members.message += "void assert failed\n";
			this.members.message += error.message + ', in: ' + error.file + ':' + error.linenumber;
			++this.members.testsFailedCount;
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
	function assertFalse( condition, error )
	{
		assertTrue.call( this, ! condition, error );
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

			= this.members.message                                + "\n"
			+ "\nTest results:\n"                            + "\n"
			+ "   Tests run   : " + this.members.testsCount       + "\n"
			+ "   Tests passed: " + this.members.testsPassedCount + "\n"
			+ "   Tests failed: " + this.members.testsFailedCount + "\n"
		;


		if     ( this.members.testsCount       === 0 )

			result += "\nSomething went wrong, nothing got tested."+ "\n";


		else if( this.members.testsFailedCount === 0 )

			result += "\nTest OK"+ "\n";


		else

			result += "\nTest NOT OK. " + this.members.testsFailedCount + " tests failed" + "\n";


		return result;
	}




	// Runs all tests

	function runTestCase()
	{
		throw new Error( "pure virtual method should not be called" );
	}


})( module.exports ); // end of TestCase

