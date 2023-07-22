import { Cell, Colors } from "models";
import { Figure, FigureNames } from "./Figure";

import BlackLogoPNG from "assets/black-bishop.png";
import WhiteLogoPNG from "assets/white-bishop.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogoPNG : WhiteLogoPNG;
    this.name = FigureNames.BISHOP;
  }
}
