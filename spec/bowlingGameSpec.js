describe('The Bowling game', function(){
  var game;
  beforeEach(function(){
    game = new BowlingGame();
  });
  var rollMany = function(pins, rolls){
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  }
  it('can roll a gutter game', function(){
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  })

  it('can roll all ones', function(){
    rollMany(1, 20);
    expect(game.score()).toBe(20);
  })
})