export class Game {
  private rolls: number[] = new Array(21).fill(0);
  private currentRoll = 0;

  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }

  getScore() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfPinsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }

  private sumOfPinsInFrame(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  private strikeBonus(frameIndex: number) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  private spareBonus(frameIndex: number) {
    return this.rolls[frameIndex + 2];
  }

  private isStrike(frameIndex: number) {
    return this.rolls[frameIndex] === 10;
  }

  private isSpare(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
}
