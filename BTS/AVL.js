
const ALLOWED_IMBALANCE = 1;

let AVLNode = function(elm, lts = null, rts = null, h = 0)
{
    this.element = elm;
    this.left = lts;
    this.right = rts;
    this.height = h;

    // this.addNode = this.addNode.bind(this);
}
AVLNode.prototype.findMin = function(node)
{
    if (node == null) return null;
    else if (node.left == null) return node;

    return this.findMin(node.left);
}
AVLNode.prototype.findMax = function(node)
{
    if (node != null)
    while(node.right != null)
    {
        node = node.right;
    }

    return node;   
}
AVLNode.prototype.getHeigth = function(node)
{
    return node == null ? -1 : node.height;
}
AVLNode.prototype.getBalance = function(node)
{
    if (node == null) return -1;
    return this.getHeigth(node.left) - this.getHeigth(node.right);
}

AVLNode.prototype.leftRotate = function(x)
{
    const y = x.right;
    const yLeftChild = y.left;

    y.left = x;
    x.right = yLeftChild;

    x.height = Math.max(this.getHeigth(x.left), this.getHeigth(x.right)) + 1;
    y.height = Math.max(this.getHeigth(y.left), this.getHeigth(y.right)) + 1;

    return y;
}
AVLNode.prototype.rightRotate = function(x)
{
    const y = x.left;
    const yRightChild = y.right;

    y.right = x;
    x.left = yRightChild;

    x.height = Math.max(this.getHeigth(x.left), this.getHeigth(x.right)) + 1;
    y.height = Math.max(this.getHeigth(y.left), this.getHeigth(y.right)) + 1;

    return y;
}
AVLNode.prototype.remove = function(x, node)
{
    if (node == null) return;
    if (x < node.element) node.left = this.remove(x, node.left);
    else if (x > node.element) node.right = this.remove(x, node.right);
    else if (node.left != null && node.right != null)
    {
        // console.log(x);
        let minVal = this.findMin(node.right).element;
        node.element = minVal;
        node.right = this.remove(minVal, node.right);
    }
    else 
    {
        return (node.left != null) ? node.left : node.right;
    }

    node.height = Math.max(this.getHeigth(node.left), this.getHeigth(node.right)) + 1;

    if (this.getBalance(node) == 2)
    {
        if (this.getBalance(node.left) >= 0)
        {
            console.log("LL");
            return this.rightRotate(node);
        }
        else if (this.getBalance(node.left) < 0)
        {
            console.log("LR");
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
    }
    else if (this.getBalance(node) == -2)
    {
        if (this.getBalance(node.left) <= 0)
        {
            console.log("RR");
            return this.leftRotate(node);
        }
        else if (this.getBalance(node.left) > 0)
        {
            console.log("RL");
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
    }

    return node;
}

AVLNode.prototype.insert = function(x, node)
{
    if (node == null) return new AVLNode(x);

    if (x < node.element) node.left = this.insert(x, node.left);
    else if ( x > node.element) node.right = this.insert(x, node.right);
    
    node.height = Math.max(this.getHeigth(node.left), this.getHeigth(node.right)) + 1;

    if (this.getBalance(node) == 2)
    {
        if (this.getBalance(node.left) >= 0)
        {
            console.log("LL");
            return this.rightRotate(node);
        }
        else if (this.getBalance(node.left) < 0)
        {
            console.log("LR");
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
    }
    else if (this.getBalance(node) == -2)
    {
        if (this.getBalance(node.left) <= 0)
        {
            console.log("RR");
            return this.leftRotate(node);
        }
        else if (this.getBalance(node.left) > 0)
        {
            console.log("RL");
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
    }

    return node;
}

let AVL = function()
{
    this.root = null;
}

AVL.prototype = {

    insert: function(x)
    {
        if (this.root == null)
        {
            this.root = new AVLNode(x);
        }
        else
        {
            this.root = this.root.insert(x, this.root);
        }

    },

    remove: function(x)
    {
        if (this.root == null)
        {
            console.log("Tree is empty.");
        } else 
        {
            this.root = this.root.remove(x, this.root);
        }
    },
    findMin: function(t = this.root)
    {
        return this.root.findMin(t);
    },
    findMax: function(t = this.root)
    {
        return this.root.findMax(t);
    },
    makeEmpty: function()
    {

    },
}




// if (t === null)
// { t = new AVLNode(x); }
// else if (x < t.element)
// {
//     this.insert2(x, t.left);
// }
// else if (x > t.element)
// {
//     this.insert2(x, t.right);
// }
// else { return; }