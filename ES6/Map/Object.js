function Entity (x, y, width, height, radius, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.element = null;
  this.radius = radius;
  this.color = color;
  this.scale = 1;

  this.create();
}
Entity.prototype = {

  create: function ()
  {
    this.element = document.createElement('div');
    // this.element.style = `width: ${this.width}px; height: ${this.height}px; position: absolute; top: ${this.y}px; left: ${this.x}px; border-radius: ${this.radius}%; background-color: ${this.color}; transform: scale(${this.scale}) translate(-50%, -50%); `;

    this.element.style = `width: ${this.width}px; height: ${this.height}px; top: ${this.y}px; left: ${this.x}px; border-radius: ${this.radius}%; background-color: ${this.color}; transform: scale(${this.scale}) `;
  },
  update: function ()
  {
    // this.element.style.top = `${this.y}px`;
    // this.element.style.left = `${this.x}px`;
    // this.element.style.transform = "translateX(" + (-50) + "%) translateY(" + (-50) + "%) scale(" + this.scale + ")";
    // this.element.style.transform = "translateX(" + (-50) + "%) scaleX(" + 1.6 + ") scaleY(" + 1.2 + ")";
    // this.element.style.transform = this.element.style.transform.replace(/scale\(\d+\)/, `scale(${this.scale})`);
    // this.element.style.transform = this.element.style.transform.replace(/scale\([0-9|\.]*\)/, 'scale(' + this.scale + ')');
    // this.element.style.transform = this.element.style.transform.replace(/translate-x\([0-6|\.]*\)/, 'translate-x(-50%)');
  },
  setPos: function ( x, y)
  {
    this.x = x;
    this.y = y;
  },
  GetModel: function()
  {
    let model = { 
      scale: this.scale,
      element: this.element,
      position: { x: this.x, y: this.y }
     };

     return model;
  },
  GetDrawable: function()
  {
    let d = new Drawable(this.GetModel());
    d.Scale(this.scale);
    d.Translate({x: this.x, y: this.y});

    return d;
  }
};