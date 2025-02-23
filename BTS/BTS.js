class BTSNode
{
    constructor(elm, lts, rts)
    {
        this.element = elm;
        this.left = lts || null;
        this.right = rts || null;
    }
}

class BTS
{
    constructor()
    {
        this.root = null;
    }

    insert(x) 
    {
        this._insert(x, this.root);
    }
    remove(x)
    {
        this._remove(x, this.root);
    }

    findMin()
    {
        return this._findMin(this.root);
    }
    findMax()
    {
        return this._findMax(this.root);
    }
    contains()
    {
        return this._contains(x, this.root);
    }


    // Recursive

    _insert ( x, t)
    {
      if (t === null)
      { t = new BTSNode(x); }
      else if (x < t.element)
      {
          this._insert(x, t.left);
      }
      else if (x > t.element)
      {
          this._insert(x, t.right);
      }
      else { return; }

    }
    _findMin ( t )
    {
        if (t === null) { return null; }
        
        if (t.left === null) { return t; }
        
        return this._findMin(t.left);
    }
    _findMax ( t )
    {
        if (t !== null)
        {
            while(t.right !== null)
            {
                t = t.right;
            }
        }
        
        return t;
    }
    
    _contains ( x, t )
    {
        if (t === null) { return false; }
        else if ( x < t.element) { this._contains(x, t.left); }
        else if (x > t.element) { this._contains(x, t.right); }
        else { return true; }
    }
    _remove ( x, t )
    {
        if (t === null) { return; }
        else if (x < t.element)
        {
            this._remove(x, t.left);
        }
        else if (x > t.element)
        {
            this._remove(x, t.right);
        }
        else if (t.left !== null && t.right !== null)
        {
            t.element = this._findMin(t.right).element;
            this._remove(t.element, t.right);
        }
        else {
            let oldNode = t;
            if (t.left !== null)
            {
                t = t.left;
            }
            else { t = t.right; }
        }
    }

}

let bts = new BTS();

bts.insert(100);

console.log(bts.root);
