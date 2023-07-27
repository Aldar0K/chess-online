import { v4 as uuid4 } from "uuid";

import { Cell, Colors } from "models";

export enum FigureNames {
  FIGURE = "FIGURE",
  KING = "KING",
  KNIGHT = "KNIGHT",
  PAWN = "PAWN",
  QUEEN = "QUEEN",
  ROOK = "ROOK",
  BISHOP = "BISHOP",
}

export class Figure {
  color: Colors;
  logo: string | null;
  cell: Cell;
  name: FigureNames;
  id: string;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = uuid4();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;

    return true;
  }

  moveFigure(target: Cell) {
    console.log(target);
  }
}
