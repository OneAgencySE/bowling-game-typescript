import { Game } from "./game";

describe("Bowling Game", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

  test('all rolls in the gutter', () => {
    const rolls = new Array(20);
    rolls.forEach(() => {
        game.roll(0);
    });

    expect(game.getScore()).toBe(0);
  });
});
