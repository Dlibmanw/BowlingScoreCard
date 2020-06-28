var BowlingGame = function () {   
  this.rolls = [];
}
BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);  
};
BowlingGame.prototype.score = function () {
  var result = 0;
  for(var i = 0; i < 20; (i+=2)){
    if(this.rolls[i]+this.rolls[i+1] == 10){
      result += this.rolls[i]+this.rolls[i+1]+this.rolls[i+2];
    }else{
    result += (this.rolls[i]+this.rolls[i+1])
    }
  }
  return result;
};