export class Tag {
  name: string;
  amount: number;
  color?: string;

  constructor(
    name: string,
    amount: number,
    color?: string
  ) {
    this.name = name;
    this.amount = amount;
    this.color = color;
  }
}


