import { Game } from "./game";

describe("Bowling Game", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

  const manyRolls = (rolls: number, pins: number) => {
    new Array<number>(rolls).fill(pins).forEach(pins => {
      game.roll(pins);
    });
  };

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  };

  const rollStrike = () => {
    game.roll(10);
  };

  test("all rolls in the gutter", () => {
    manyRolls(20, 0);
    expect(game.getScore()).toBe(0);
  });

  test("all rolls hit one pin", () => {
    manyRolls(20, 1);

    expect(game.getScore()).toBe(20);
  });

  test("rolls one spare", () => {
    rollSpare();
    game.roll(3);
    manyRolls(17, 0);

    expect(game.getScore()).toBe(16);
  });

  test("rolls one srike", () => {
    rollStrike();
    game.roll(4);
    game.roll(3);
    manyRolls(16, 0);

    expect(game.getScore()).toBe(24);
  });

  test("rolls perfect game", () => {
    manyRolls(20, 10);
    expect(game.getScore()).toBe(300);
  });
});
