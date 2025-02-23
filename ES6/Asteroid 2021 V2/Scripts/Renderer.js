function Renderer() {}

Renderer.Draw = function (model, translation, scale) {
  model.position.x *= scale;
  model.position.y *= scale;
  model.position.x += translation.x;
  model.position.y += translation.y;

//   map.appendChild(model.element);
    
};
