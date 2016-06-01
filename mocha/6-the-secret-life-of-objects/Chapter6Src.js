function Vector (x, y) {
  this.x = Number(x);
  this.y = Number(y);
}

Vector.prototype.plus = (newVector) => {
  var sum = {
    "x": this.x + newVector.x,
    "y": this.y + newVector.y
  }
  return new Vector(sum.x, sum.y);
};

Vector.prototype.minus = (newVector) => {
  var diff = {
    "x": this.x - newVector.x,
    "y": this.y - newVector.y
  }
  return new Vector(diff.x, diff.y);
};

Vector.prototype.length = () => {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)).toFixed(2);
};


module.exports = Vector;