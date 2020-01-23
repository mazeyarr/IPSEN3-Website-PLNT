export interface ITag {
  name: string;
  amount: number;
}

export class Tag {
  name: string;
  amount: number;

  constructor(
    tag: ITag
  ) {
    this.name = tag.name;
    this.amount = tag.amount;
  }
}


