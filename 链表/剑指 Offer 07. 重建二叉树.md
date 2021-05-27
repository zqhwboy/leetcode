输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

返回如下的二叉树：

```java


    3
   / \
  9  20
    /  \
   15   7

 
```



限制：

0 <= 节点个数 <= 5000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# leetcode官方解答

```java
class Solution {
    private Map<Integer, Integer> indexMap;

    public TreeNode myBuildTree(int[] preorder, int[] inorder, int preorder_left, int preorder_right, int inorder_left, int inorder_right) {
        if (preorder_left > preorder_right) {
            return null;
        }

        // 前序遍历中的第一个节点就是根节点
        int preorder_root = preorder_left;
        // 在中序遍历中定位根节点
        int inorder_root = indexMap.get(preorder[preorder_root]);
        
        // 先把根节点建立出来
        TreeNode root = new TreeNode(preorder[preorder_root]);
        // 得到左子树中的节点数目
        int size_left_subtree = inorder_root - inorder_left;
        // 递归地构造左子树，并连接到根节点
        // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
        root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1);
        // 递归地构造右子树，并连接到根节点
        // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
        root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right);
        return root;
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int n = preorder.length;
        // 构造哈希映射，帮助我们快速定位根节点
        indexMap = new HashMap<Integer, Integer>();
        for (int i = 0; i < n; i++) {
            indexMap.put(inorder[i], i);
        }
        return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
    }
}

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/solution/mian-shi-ti-07-zhong-jian-er-cha-shu-by-leetcode-s/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

#  java自己模仿写

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
 //思路谦虚第一个字母是根节点,然后中序找到该根节点,然后其左边的树都是该根节点的左子树,右边的树就是该根节点的右子树的结点,然后继续前序遍历节点 .
class Solution {
    private Map<Integer,Integer> map;
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        //先把中序遍历中所有节点信息存起来
        int n=inorder.length;
        map = new HashMap<Integer, Integer>();
        for(int i=0;i<n;i++){
            map.put(inorder[i],i);
        }
        return constructTree(preorder,inorder,0,n-1,0,n-1);

    }
    public TreeNode constructTree(int[]preorder,int[] inorder,int leftstart,int leftend,int rightstart,int rightend ){
        //终止条件
        if(leftstart>leftend){
            return null;
        }
        int root1=leftstart;
        
        int rootindex=map.get(preorder[leftstart]); //当前根节点在中序遍历中对应的结点索引
        int size=rootindex-rightstart;//计算的是中序中左子树的数量
        //建立根节点
        TreeNode root=new TreeNode(preorder[root1]);
        root.left=constructTree(preorder,inorder,leftstart+1,leftstart+size,rightstart,rootindex-1);
        root.right=constructTree(preorder,inorder,leftstart+size+1,leftend,rootindex+1,rightend);
        return root; 
    }
}
```

