function Drawable(model) {
  this.model = model;
  this.translation = { x: 0, y: 0 };
  this.scale = 1;
}
Drawable.prototype = {
  Translate: function (translation_in) {
    this.translation.x += translation_in.x;
    this.translation.y += translation_in.y;
  },
  Scale: function (scale_in) {
    this.scale *= scale_in;
    // this.translation.x *= scale_in;
    this.translation.y *= scale_in;
  },
  Render: function () {
    Renderer.Draw(this.model, this.translation, this.scale);
  },
};
