class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root) {
    if (root === null) {
        return 0;
    } else {
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

module.exports = {
    TreeNode,
    maxDepth
}