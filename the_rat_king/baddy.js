var Baddy = function( name, health, faveFood ) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.damage = 0;
  this.speak = function() {
    return ( "SKRERREREEEREEEEE " + this.name.toUpperCase() )
  };
  this.eat = function( food ) {
    if( food.name === this.faveFood ){
      return this.health -= (food.heal * 1.5 )
    } else {
      return this.health -= food.heal
    }
  };
  this.swipe = function( enemy ) {
    var number = Math.floor(Math.random() * (17 - 11) + 11);
    this.damage = number;
    enemy.health -= this.damage;
  };
  this.special = function( enemy ) {
    if( this.health >= 50 ) {
      this.damage = 24;
      this.health -= 10;
      enemy.health -= this.damage;
    }
  }
}





module.exports = Baddy;