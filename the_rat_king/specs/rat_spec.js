var Rat = require('../rat');

var assert = require('chai').assert;


describe( "The Rat", function() {

  it( "Should exist", function() {
    var dave = new Rat( "dave", true );
    assert.equal( "dave", dave.name )
  })

  it( "Rat is not diseased", function() {
    var bob = new Rat( "bob", false );
    assert.equal( false, bob.diseased )
  })

  it( "Rat is diseased", function() {
    var dave = new Rat( "dave", true );
    assert.equal( true, dave.diseased )
  })

} )