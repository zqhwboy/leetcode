# 题目内容

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

```java
    3
   / \
  9  20
    /  \
   15   7
```



返回 `true` 。

 **示例 2:**

给定二叉树 `[1,2,2,3,3,null,null,4,4]`

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

返回 false 。

 

限制：

    0 <= 树的结点个数 <= 10000

注意：本题与主站 110 题相同：https://leetcode-cn.com/problems/balanced-binary-tree/

来源：力扣（LeetCode）

# java解答  

* 和上次写的那道题思路一模一样,直接写

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {

        return DFS(root)>=0;
    }
    public int DFS(TreeNode root){
        if(root==null){
            return 0;
        }
        int left=DFS(root.left);
        int right=DFS(root.right);
        if(left<0||right<0||Math.abs(left-right)>1){
            return -1;
        }
        return Math.max(1+right,1+left);
    }
}
```

# 总结

* 明白为什么要求每个节点的最大深度?

因为从头开始比,每次比的是左右两边的最大深度,这样递归到叶子节点的时候所有的情况都可以比较过了. 而且比较两边的结点深度也是必须算出该两边最大深度.

每个结点的左右子树的深度差也是这样定义的.用左边的最大深度-右边最大深度.  然后所有结点都遍历,结果就有了