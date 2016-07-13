var Food = require('../food');
var Rat = require('../rat');

var assert = require('chai').assert;

describe( "Our Food", function() {

  beforeEach( function() {
    chicken = new Food( "Chicken Drumsticks", 10 )
    toast = new Food( "Toast", 3 )

    dave = new Rat( "Dave", true )
    bob = new Rat( "Bob", false )
  })

  it( "Should have a name", function() {
    assert.equal( "Toast", toast.name )
  })

  it( "Should heal", function() {
    assert.equal( 10, chicken.heal )
  })

  it( "Should be not poisoned", function() {
    chicken.poisoning( bob )
    assert.equal( false, chicken.taint )
  })

  it( "Should be poisoned", function() {
    chicken.poisoning( dave )
    assert.equal( true, chicken.taint )
  })

} )