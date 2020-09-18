export class ScrollRangeModel {
  private StartIndex: number;
  private EndIndex: number;

  public set startIndex(value: number) {
    if (value < 0) {
      throw Error('Start index couldn\'t be less zero');
    }
    if (this.EndIndex) {
      if (value < this.EndIndex) {
        this.StartIndex = value;
      } else {
        throw Error('Start index should be less than end index');
      }
    } else {
      this.StartIndex = value;
    }
  }
  public get startIndex(): number {
    return this.StartIndex;
  }

  public set endIndex(value: number) {
    if (value < 0) {
      throw Error('End index couldn\'t be less zero');
    }
    if (this.StartIndex) {
      if (value > this.StartIndex) {
        this.EndIndex = value;
      } else {
        throw Error('End index should be more than start index');
      }
    } else {
      this.EndIndex = value;
    }
  }
  public get endIndex(): number {
    return this.EndIndex;
  }
}
