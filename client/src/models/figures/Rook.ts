import { Cell, Colors } from "models";
import { Figure, FigureNames } from "./Figure";

import BlackLogoPNG from "assets/black-rook.png";
import WhiteLogoPNG from "assets/white-rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogoPNG : WhiteLogoPNG;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;

    return false;
  }
}
