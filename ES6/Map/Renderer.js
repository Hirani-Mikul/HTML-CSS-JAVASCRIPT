function Renderer() {}

Renderer.Draw = function (model, translation, scale) {
  model.position.x *= scale;
  model.position.y *= scale;
  model.position.x += translation.x;
  model.position.y += translation.y;

  model.element.style.top = `${model.position.y}px`;
  model.element.style.left = `${model.position.x}px`;
  model.element.style.transform =
    'translateX(' + -50 + '%) translateY(' + -50 + '%) scale(' + scale + ')';

  map.appendChild(model.element);
};
