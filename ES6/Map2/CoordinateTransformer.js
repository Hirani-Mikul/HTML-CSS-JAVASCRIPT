function CoordinateTransformer ()
{

}
CoordinateTransformer.Draw = function(drawable)
{
  const offset = { x: width / 2, y: height / 2 };

  drawable.Translate(offset);
  drawable.Render();
}