
// let Node 
// const tree = document.getElementById('tree');
const tree = document.querySelector('.tree ul');

let Node = function(x, lst = null, rst = null)
{
    this.element = x;
    this.left = lst;
    this.right = rst;
    this.height = 0;
}

let n1 = new Node(3);
n1.left = new Node(1);
n1.left.right = new Node(2);
n1.right = new Node(5);
n1.right.left = new Node(4);
n1.right.right = new Node(6);

function draw()
{

    let parent = createNode(n1);
    // parent.appendChild(parent2);

    tree.appendChild(parent);
    // let child1 = createNode(3);
    // let child2 = createNode(5);
    // tree.innerHTML += child;
    // tree.innerHTML += child1;
    // tree.innerHTML += child2;
}
draw();

function createNode(node)
{
    if (node == null) return;

    let n = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = node.element;

    n.appendChild(span);

    if (node.left || node.right)
    {
        let ul = document.createElement('ul');

        if (node.left) ul.appendChild(createNode(node.left));
        if (node.right) ul.appendChild(createNode(node.right));

        n.appendChild(ul);
    }

    return n;
}
