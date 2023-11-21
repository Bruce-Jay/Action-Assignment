const assert = require('assert');
const { TreeNode, maxDepth } = require('../binaryTreeDepth'); // 替换为你的树深度计算代码文件的路径

describe('Binary Tree Depth', function () {
  it('should return 0 for an empty tree', function () {
    const root = null;
    const depth = maxDepth(root);
    assert.strictEqual(depth, 0);
  });

  it('should return 1 for a tree with only one node', function () {
    const root = new TreeNode(1);
    const depth = maxDepth(root);
    assert.strictEqual(depth, 1);
  });

  it('should return the correct depth for a binary tree', function () {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    const depth = maxDepth(root);
    assert.strictEqual(depth, 3);
  });

  // 添加更多的测试用例
});
