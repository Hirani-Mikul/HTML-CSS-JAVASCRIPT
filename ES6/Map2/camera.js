function Camera() {
  this.x = 0;
  this.y = 0;
  this.scale = 1;
}
Camera.prototype = {
  Draw: function (drawable) {
    drawable.Translate({ x: -this.x, y: -this.y });
    drawable.Scale(this.scale);

    drawable.Render();
    // CoordinateTransformer.Draw(drawable);
  },
  AbsoluteDraw: function (drawable) {
    drawable.Translate({ x: -this.x, y: -this.y });

    // drawable.Render();
    CoordinateTransformer.Draw(drawable);
  },
  MoveBy: function (x, y) {
    this.x += x;
    this.y += y;
  },
  GetPos: function () {
    return { x: this.x, y: this.y };
  },
  GetScale: function () {
    return this.scale;
  },
  SetScale: function (scale_in) {
    this.scale = scale_in;
  },
};
