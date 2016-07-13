var Baddy = require('../baddy');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

var assert = require('chai').assert;

describe( "The Baddy", function() {

  beforeEach( function() {
    ratKing = new Baddy( "Rat King", 100, "Chicken Drumsticks"  )
    dangerousMouse = new Baddy( "Dangereous Mouse", 75, "Pizza"  )

    steve = new Hero( "Steve", 100, "Chicken Drumsticks" )

    chicken = new Food( "Chicken Drumsticks", 10 )
    toast = new Food( "Toast", 3 )

    bob = new Rat( "bob", true )

  })


  it( "Baddy has a name", function() {
    assert.equal( "Rat King", ratKing.name)
  })

  it( "Baddy should gain health when poisoned by chicken", function() {
    chicken.poisoning( bob )
    ratKing.eat( chicken )
    assert.equal( 115, ratKing.health )
  })

  it( "Baddy should lose health when not poisoned by toast", function() {
    ratKing.eat( toast )
    assert.equal( 97, ratKing.health )
  })

  it( "Baddy should not be able to use special", function() {
    steve.swipe( ratKing )
    steve.special( ratKing )
    steve.special( ratKing )
    ratKing.special( steve )
    assert.equal( 0, ratKing.damage )
  })
  it( "baddy swallows food thrown in anger", function() {
    steve.throwFood(toast, ratKing)
    assert.equal(97, ratKing.health)
  })

} )








