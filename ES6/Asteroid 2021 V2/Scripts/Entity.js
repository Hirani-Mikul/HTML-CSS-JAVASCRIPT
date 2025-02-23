function Entity(x, y, width, height, radius) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.element = null;
    this.radius = radius;
    this.color = color;
    this.scale = 1;
  
  }
  Entity.prototype = {
    create: function () {
      this.element = document.createElement('div');
      this.element.classList.add('result-item');
      this.element.innerHTML = this.GetContent();
      this.element.addEventListener('click', (e) => {
        Shout();
      });
  
      this.element.style = `width: ${this.width}px; height: ${this.height}px; top: ${this.y}px; left: ${this.x}px; border-radius: ${this.radius}%; background-color: ${this.color}; transform: scale(${this.scale}) `;
    },
    GetContent: function () {
      
    },
    setPos: function (x, y) {
      this.x = x;
      this.y = y;
    },
    GetModel: function () {
      let model = {
        scale: this.scale,
        element: this.element,
        position: { x: this.x, y: this.y },
      };
  
      return model;
    },
    GetDrawable: function () {
      let d = new Drawable(this.GetModel());
      d.Scale(this.scale);
      d.Translate({ x: this.x, y: this.y });
  
      return d;
    },
  };
  
  