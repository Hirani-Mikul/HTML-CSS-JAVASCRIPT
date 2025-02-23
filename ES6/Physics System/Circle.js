function Circle (x, y, r)
{
    this.pos = new Vector(x, y);
    this.vel = Vector.random2D();
    this.acc = new Vector(10, 0);
    this.radius = r;

}
Circle.prototype = {
    display: function()
    {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(this.pos.x + this.radius, this.pos.y, 2, 0, Math.PI * 2);
        ctx.fill();
    },
    update: function ()
    {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    },
    checkEdges: function()
    {
        let x = this.pos.x;
        let y = this.pos.y;
        let r = this.radius;

        if (x - r > width) this.pos.x = 0 - r;
        else if (x + r < 0) this.pos.x = width + r;

        if (y - r > height) this.pos.y = 0 - r;
        else if (y + r < 0) this.pos.y = height + r;
    }
}