import { Cell, Colors } from "models";
import { Figure, FigureNames } from "./Figure";

import BlackLogoPNG from "assets/black-queen.png";
import WhiteLogoPNG from "assets/white-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogoPNG : WhiteLogoPNG;
    this.name = FigureNames.QUEEN;
  }
}
