function Entity(x, y, width, height, radius, color) {
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
    return `
       <h3 class='name'>Print Function</h3>
      <div class='duration show'>
        <span class='hidden'>Dur: </span>
        <span>500ms</span>
      </div>
      <div class='body'>
        <div class='time-taken show'>
          <span class='hidden'>Start - End</span>
          <span>1800ms - 2300ms</span>
        </div>
        <div class='thread-info show'>
          <span class='hidden'>ThreadID:</span>
          <span>39203920</span>
        </div>
      </div>
    `;
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

{
  /* <h3 class='name'>Print Function</h3>
  <div class='duration show'>
    <span class='hidden'>Dur: </span>
    <span>500ms</span>
  </div>
  <div class='body'>
    <div class='time-taken show'>
      <span class='hidden'>Start - End</span>
      <span>1800ms - 2300ms</span>
    </div>
    <div class='thread-info show'>
      <span class='hidden'>ThreadID:</span>
      <span>39203920</span>
    </div>
  </div> */
}
