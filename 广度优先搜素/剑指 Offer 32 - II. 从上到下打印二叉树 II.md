从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

```java
	3
   / \
  9  20
    /  \
   15   7
```


返回其层次遍历结果：

```java
[
  [3],
  [9,20],
  [15,7]
]
```



 

提示：

    节点总数 <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# java解答

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
    public List<List<Integer>> levelOrder(TreeNode root) {
       
        Deque<TreeNode> queue = new ArrayDeque<TreeNode>();  //定义队列
        List<List<Integer>> list=new ArrayList<List<Integer>>();  //定义个集合
         if(root==null){
            return list; //返回列表
        }
        queue.offer(root);  //放入队列   这里可以用push,但是推荐放到队尾的一律用offer
        
        while (!queue.isEmpty()){
            int size=queue.size();   //当前队列大小
            ArrayList<Integer> list1 = new ArrayList<Integer>();  //声明一个集合
            for (int i = 0; i < size; i++) {
                TreeNode pop = queue.pop();  //弹出当前元素
                list1.add(pop.val);
                if(pop.left!=null){   //看是否有左节点 
                    queue.offer(pop.left);  //千万不能用push 否则就凉了
                }
                if(pop.right!=null){  //看是否有右节点
                    queue.offer(pop.right);   //千万不能用push 否则就凉了
                }
            }
            list.add(list1);  //嵌套集合中增加集合
        }
        return list;
    }
}
```

