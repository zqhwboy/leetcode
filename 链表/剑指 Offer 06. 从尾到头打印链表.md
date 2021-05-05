# 题目内容

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 用栈实现

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
 //用栈实现以下
class Solution {
    public int[] reversePrint(ListNode head) {
       //定义一个节点接收传过来的结点
        ListNode newHead=head;
        //定义一个栈
        Stack<Integer> stack=new Stack<Integer>();
        //将树中的每个结点的val全部添加进去
        while(newHead!=null){
            stack.add(newHead.val);
            newHead=newHead.next;
        }
        //定义整形数组
        int [] arr=new int[stack.size()];
        //不能这样,,因为你弹出元素后栈的大小都变了
        // for(int i=0;i<stack.size();i++){
        //     arr[i]=stack.peek();
        //     stack.pop();
        // }
        
        //弹出栈元素并存进对应的数组中
        for(int i=0;!stack.empty();i++){
            arr[i]=stack.pop();
        }
        //返回数组
        return arr;
    }
}
```

# 递归实现(题解代码链接在代码下面)

```java
class Solution {
    ArrayList<Integer> tmp = new ArrayList<Integer>();
    public int[] reversePrint(ListNode head) {
        recur(head);
        int[] res = new int[tmp.size()];
        for(int i = 0; i < res.length; i++)
            res[i] = tmp.get(i);
        return res;
    }
    void recur(ListNode head) {
        if(head == null) return;
        recur(head.next);
        tmp.add(head.val);
    }
}

作者：jyd
链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/mian-shi-ti-06-cong-wei-dao-tou-da-yin-lian-biao-d/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

