const tree = document.querySelector('.tree ul');
const form = document.getElementById('input');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.elements['input'];

    if (input.value.trim() !== '')
    {
        input.className = '';
        insert(input.value);
    }
    else input.className = 'warning';

    input.value = '';
})



let avl = new AVL();

function insert(value)
{
    avl.insert(value);

    tree.innerHTML = '';

    tree.appendChild(createNode(avl.root));

}

function main ()
{
    // avl.insert(1);
    // avl.insert(2);
    // avl.insert(3);
    // avl.insert(-3);
    // avl.insert(4);
    // avl.insert(5);
    // avl.insert(4.6);
    // avl.insert(7);

    // avl.remove(3);
    // avl.remove();
    // avl.insert(10);
    // avl.insert(2);
    // avl.insert(11);
    // // avl.insert(9);
    // console.log(avl.root);

    // let min = avl.findMin().element;
    // let max = avl.findMax().element;
    // console.log("Min: " + min);
    // console.log("Max: " + max);
    // console.log("Height: " + avl.root.getHeight(avl.root));

    tree.appendChild(createNode(avl.root));
}

main();

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