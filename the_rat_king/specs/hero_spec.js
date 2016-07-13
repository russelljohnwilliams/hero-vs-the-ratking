var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

var assert = require('chai').assert;

describe( "Our Hero", function() {

  beforeEach( function() {
    jeff = new Hero( "Jeff", 100, "Chicken Drumsticks"  )
    steve = new Hero( "Steve", 100, "Pizza"  )
    chicken = new Food( "Chicken Drumsticks", 10 )
    toast = new Food( "Toast", 3 )
    bob = new Rat( "bob", true )
  })


  it( "Hero has a name", function() {
    assert.equal( "Jeff", jeff.name)
  })

  it( "Hero has health", function() {
    assert.equal( 100, jeff.health )
  })

  it( "Hero has favourite food", function() {
    assert.equal( "Chicken Drumsticks", jeff.faveFood )
  })

  it( "Hero can say name", function() {
    assert.equal( "AAARGHAGRHGHRHAGH I AM JEFF", jeff.speak() )
  })

  it( "Hero's health should gain 3", function() {
    jeff.eat( toast );
    assert.equal( 103, jeff.health );
  })

  it( "Hero's health should gain 15", function() {
    jeff.eat( chicken );
    assert.equal( 115, jeff.health );
  })

  it( "Hero should lose health when poisoned by chicken", function() {
    chicken.poisoning( dave )
    jeff.eat( chicken )
    assert.equal( 85, jeff.health )
  })

  it( "Hero should lose health when poisoned by toast", function() {
    toast.poisoning( dave )
    jeff.eat( toast )
    assert.equal( 97, jeff.health )
  })

  it( "Hero should gain attack damage", function() {
    jeff.special( steve );
    assert.equal( 24, jeff.damage )
  })

  it( "Poor Steve loses health, 🤕", function() {
    jeff.special( steve )
    assert.equal( 76, steve.health )
  })

})


























