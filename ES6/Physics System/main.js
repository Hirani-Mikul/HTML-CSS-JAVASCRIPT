const c = new Circle(200, 200, 100);

const draw = () => {
    ctx.clearRect(0, 0, width, height);

    c.update();
    c.checkEdges();
    c.display();

    requestAnimationFrame(draw);
  };
  draw();