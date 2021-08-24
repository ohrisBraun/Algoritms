class TreeItem {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

function treeBuilder (x) {
    if(x > 0) {
        return  new TreeItem(x, x - 2 ? treeBuilder(x - 2) : null, x - 1 ? treeBuilder(x - 1) : null)
    }

    return null;
}

function maxTreeHeight (tree) {
    if (!tree) {
        return 0;
    }

    return 1 + Math.max(maxTreeHeight(tree.left), maxTreeHeight(tree.right));
}

function treeSize (tree) {
    if (!tree) {
        return 0;
    }

    return 1 + treeSize(tree.left) + treeSize(tree.right);
}


function inOrderTraversal (tree) {
    const array = [];

    if (tree.left) {
        array.push(...inOrderTraversal(tree.left));
    }

    array.push(tree.value);

    if (tree.right) {
        array.push(...inOrderTraversal(tree.right));
    }

    return array;
}

function preOrderTraversal (tree) {
    const array = [];

    array.push(tree.value);

    if (tree.left) {
        array.push(...preOrderTraversal(tree.left));
    }


    if (tree.right) {
        array.push(...preOrderTraversal(tree.right));
    }

    return array;
}

function postOrderTraversal(tree) {
    const array = [];

    if (tree.left) {
        array.push(...postOrderTraversal(tree.left));
    }


    if (tree.right) {
        array.push(...postOrderTraversal(tree.right));
    }

    array.push(tree.value);

    return array;
}

function levelTraversal (tree) {
    if (!tree) {
        return;
    }

    const queue = [];
    const output = [];

    queue.push(tree);

    while (queue.length) {
        const treeItem = queue.shift();

        if (treeItem.left) {
            queue.push(treeItem.left)
        }
        if (treeItem.right) {
            queue.push(treeItem.right)
        }
        output.push(treeItem.value);
    }

    return output;
}

const testTree = treeBuilder(4);

console.log('Max tree height: ',maxTreeHeight(testTree));
console.log('Tree size: ',treeSize(testTree));

console.log('In order: ',inOrderTraversal(testTree));
console.log('Pre order: ', preOrderTraversal(testTree));
console.log('Post order: ', postOrderTraversal(testTree));

console.log('Level order: ', levelTraversal(testTree));
