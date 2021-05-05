# 题目内容

输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

        3
       / \
      9  20
        /  \
       15   7


返回它的最大深度 3 。

 

提示：

    节点总数 <= 10000

注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

来源：力扣（LeetCode）

# java解答

/**

 \* Definition for a binary tree node.

 \* public class TreeNode {

 \*   int val;

 \*   TreeNode left;

 \*   TreeNode right;

 \*   TreeNode(int x) { val = x; }

 \* }

 */

class Solution {

  public int maxDepth(TreeNode root) {

​    if(root==null){

​      return 0;

​    }

​    if(root.left==null&&root.right==null){

​      return 1;

​    }

​    //初始时候a,b都是1,因为当前结点肯定不为0

​    int a=1,b=1;

​    a=a+maxDepth(root.left);

​    b=b+maxDepth(root.right);

​    //三元表达式返回最大值

​    return a>b?a:b;



  }

}