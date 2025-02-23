function Slider(x, y, w, h, id, min, max, currentvalue, step) {
  this.x = x;
  this.y = y;
  this.pos = { x: x, y: y };
  this.w = w;
  this.h = h;
  this.col = 'rgb(255, 255, 255)';
  this.bcol = 'rgb(0, 0, 0)';
  this.ballcolor = 'cyan';
  this.size = this.h;
  this.ID = id;
  this.min = min || 0;
  this.max = max || 1;

  this.step = step || 1;

  this.isSelected = false;

  this.value = currentvalue;
}

Slider.prototype = {
  construct: function () {
    this.pos.x = mapNum(
      this.value,
      this.min,
      this.max,
      this.x,
      this.x + this.w
    );

    this.pos.x = constrain(this.pos.x, this.x, this.x + this.w);
  },
  display: function () {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle = this.bcol;
    ctx.strokeRect(this.x - 1, this.y - 1, this.w + 2, this.h + 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fill();

    // ctx.beginPath();
    // ctx.fillStyle = this.ballcolor;
    // ctx.fillRect(this.pos.x - this.size / 2, this.pos.y, this.size, this.size);
    // ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = this.ballcolor;
    ctx.arc(this.pos.x, this.pos.y + this.size / 2, this.size, 0, Math.PI * 2);
    ctx.fill();
  },

  select: function () {
    // if (isInside(this.pos, this.size)) {
    //   this.isSelected = true;
    //   this.ballcolor = 'blue';
    // } else {
    //   this.isSelected = false;
    //   this.ballcolor = 'red';
    // }

    if (dist(this.pos, this.size)) {
      this.isSelected = true;
      this.ballcolor = 'blue';
    } else {
      this.isSelected = false;
      this.ballcolor = 'cyan';
    }
  },

  slide: function (dir) {
    if (this.isSelected) {
      this.pos.x += this.step * dir;
      this.pos.x = constrain(this.pos.x, this.x, this.x + this.w);

      // this.value = round(
      //   mapNum(this.pos.x, this.x, this.x + this.w, this.min, this.max)
      // );

      this.value = Math.round(
        mapNum(this.pos.x, this.x, this.x + this.w, this.min, this.max)
      );

      // let offset = this.pos.x - this.x;

      // if (dir > 0) offset += this.h;

      // let length = this.max - this.min;

      // this.value = (offset * length) / this.w;
    }
  },
};

/*
  current position = 150;
  max position = 200;

  length = 200 - 150 = 50;

  value = max - min / length

  value = 100 / 10 = value = 10;

  __________________________________

  current positio = 50;
  max position = 100;

  max offset = 100;

  offset = max position - current position
  offset = 50;

  length = max - min
  length = 100;

  value = ( offset / max offset ) * length;
  
  50 / 100 = .5 * 100 = 50;
  20 / 100 = .2 * 100 = 20;

  100/100 = 1 * 100 = 100;



*/
