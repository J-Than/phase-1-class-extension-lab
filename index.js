class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }

  get countSides() {
    return this.sidesArray.length;
  }

  get perimeter() {
    return this.sidesArray.reduce((p,c) => p+c);
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.sidesArray[0] * 2 < this.perimeter && this.sidesArray[1] * 2 < this.perimeter && this.sidesArray[2] * 2 < this.perimeter;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sidesArray[0] === this.perimeter / 4 && this.sidesArray[1] === this.perimeter / 4 && this.sidesArray[2] === this.perimeter / 4;
  }

  get area() {
    if (this.isValid) {
      return this.sidesArray[0] * this.sidesArray[1];
    }
    return 'Not a square.'
  }
}