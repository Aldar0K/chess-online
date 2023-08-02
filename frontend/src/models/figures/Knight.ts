import { Cell, Colors } from "models";
import { Figure, FigureNames } from "./Figure";

import BlackLogoPNG from "assets/black-knight.png";
import WhiteLogoPNG from "assets/white-knight.png";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogoPNG : WhiteLogoPNG;
    this.name = FigureNames.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) return true;

    return false;
  }
}
