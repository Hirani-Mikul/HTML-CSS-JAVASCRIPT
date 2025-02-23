function Creature(x, y) {
  this.position = new Vector(x, y);
  this.velocity = new Vector(0, 0);
  this.acceleration = new Vector(0, 0);
  this.Health = 100;
  this.angle = 0;
  this.Age = 5;
  this.type = "A";
  this.speed = 5;
}
Creature.prototype = {
  getFood: function (food) {
    let foodPos = food.position.clone();
    let direction = Vector.subtract(foodPos, this.position);
    this.acceleration = direction;
  },
  update: function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.speed);
    this.position.add(this.velocity);
    this.angle = this.velocity.heading();
    this.Health = constrain(this.Health, 0, 100);
    this.Health -= 0.01;
  },
  checkCollision: function (food) {
    return (
      this.position.x + this.Age > food.position.x - food.Age &&
      this.position.x - this.Age < food.position.x + food.Age &&
      this.position.y - this.Age < food.position.y + food.Age &&
      this.position.y + this.Age > food.position.y - food.Age
    );
  },
  checkEdges: function () {
    if (this.position.x + this.Age > width) {
      this.position.x = -this.Age;
    } else if (this.position.x - this.Age < 0) {
      this.position.x = width + this.Age;
    }
    if (this.position.y + this.Age > height) {
      this.position.y = -this.Age;
    } else if (this.position.y - this.Age < 0) {
      this.position.y = height + this.Age;
    }
  },
};
