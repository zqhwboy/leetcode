# 题目内容

```java0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

示例 1：

输入: n = 5, m = 3
输出: 3

示例 2：

输入: n = 10, m = 17
输出: 2

 

限制：

    1 <= n <= 10^5
    1 <= m <= 10^6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

解题思路 此处撰写解题思路 

1. 先把所有孩子存进到数组列表中取 
2. 然后找规律,你发现每次需要剔除的元素的位置就是(当前位置+需要移动的次数-1)%此时列表的大小 
3. 为什么移动的次数需要减1呢? 起始减1是因为数租中元素是0开始的,移动到m-1既可以了 
4. 后面每次剔除也为什么都减1呢?? 因为你出发的位置被剔除过了,他会填充进新的,默认移动了一个,所以后面也需要移动m-1 
5. 注意:列表大小是一直变化的,所以当列表大小为1的时候就是循环结束的时候 

# java解答

```java
class Solution {
   public int lastRemaining(int n, int m) {
        ArrayList<Integer> integers = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            integers.add(i);
        }
        int j=0;
        int a=0;
        while(integers.size()!=1){
            a=(a+(m-1))%integers.size();
            integers.remove(a);
        }
        return integers.get(0);
    }
}
```

# 环形链表实现约瑟夫问题

/*
* 构建一个单项的环形链表思路
* 1.先创建一个节点,让first指向该接节点,并形成环形
* 2.后面当我们每创建一个新结点,就把该结点,加入到已有的环形链表中即可
*
* 遍历环形链表
* 1.先让一个辅助指针(变量) 指向first节点
* 2.然后通过一个while循环遍历该环形链表即可 curBoy.next=first结束;
* 
* 根据用户输入,生成一个小孩出圈的顺序
* 1.需求创建一个辅助指针(变量)helper,事先应该指向环形链表的最后这个节点
* 补充: 小孩报数前,先让first和helper移动k-1次,
* 2.当小孩报数时,让first和helper指针同时移动m-1次
* 3.这是就可以将first指向的小孩节点可以出圈了 
*		first -->first.next
*		helper.next-->first
*	原来first指向的结点没有任何引用了,就会被回收
* */

```
package T1;

public class Josepfu {
    public static void main(String[] args) {
        //测试一把 看看构建环形链表和遍历是否ok
        CircleSingleLinkedList circleSingleLinkedList = new CircleSingleLinkedList();
        circleSingleLinkedList.addBoy(5); //加入5个小孩节点
        circleSingleLinkedList.showBoy(); //展示小孩
        //测试一把小孩出圈是否正确
        circleSingleLinkedList.countBoy(1,2,5);
    }
}
//创建一个环形的单项链表
class CircleSingleLinkedList{
    //创建一个first,当前没有编号
    private Boy first=null;
    //添加小孩节点,构建成一个环形链表
    public void addBoy(int nums){
        //nums做个数据校验
        if(nums<1){
            System.out.println("数据的值是不正确的");
            return;
        }
        //辅助指针
        Boy curBoy=null; //辅助真真,帮助构建环形链表
        //使用for循环创建我们的环形链表
        for (int i = 1; i <= nums; i++) {
            Boy boy = new Boy(i );
            //如果是第一个小孩
            if(i==1){
                first=boy;
                first.setNext(first);  //构成一个换装
                curBoy=first; //让curBoy指向第一个小孩
            }
            curBoy.setNext(boy);
            boy.setNext(first);
            curBoy=boy;

        }
    }
    //遍历当前的环形链表
    public void showBoy(){
        //判断链表是否为空
        if(first==null){
            System.out.println("没有任何小孩");
            return ;
        }
        //因此我们first不能动,因此我们使用一个辅助真真完成遍历
        Boy temp=first;
        while (temp.getNext()!=first){
            System.out.println("小孩的编号"+temp.getNo());
            temp=temp.getNext();  //temp指针后移
        }
    }
    //根据用户的输入,计算出小孩出圈的顺序
    //startNo 表述从第几个小孩开始  countNum表示数几下  nums表示右杜少个小孩在圈中
    public void countBoy(int startNo,int countNum ,int nums){
        //先对数据进行校验
        if(first==null||startNo<1||startNo>nums){
            System.out.println("参数输入有误,请重新输入");
        }
        //创建一个辅助指针,帮助完成小孩出圈
        Boy helper=first;
        //需求创建一个辅助指针helper,事先该指向环形链表的最后这个节点
        while(true){
            if(helper.getNext()==first){
                break;
            }
            helper=helper.getNext();
        }
        //让小孩报数前,先让first和helper移动k-1次
        for (int j=0;j<startNo-1;j++){
            first=first.getNext();
            helper=helper.getNext();
        }
        //当小孩报数时,让first和helper指针同时移动m-1次
        //这里是一个循环的操作,直到圈中只有一个节点
        while(true){
            if(helper==first){
                break;
            }
            //让first和helper指针同时的移动countNum-1,然后去出圈
            for (int j=0;j<countNum-1;j++){
                first=first.getNext();
                helper=helper.getNext();
            }
            //这是first指向的结点就是要出圈的小孩节点
            System.out.print("小孩出圈"+first.getNo()+"\n");
            //这是将first指向的小孩节点出圈
            first=first.getNext();
            helper.setNext(first);

        }
        System.out.println("最后留在圈中小孩编号"+helper.getNo());
    }
}
//创建一个Boy表示一个节点
class Boy{
    private  int no; //编号
    private Boy next;//指向下一个节点,默认null

    public Boy(int no) {
        this.no = no;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public Boy getNext() {
        return next;
    }

    public void setNext(Boy next) {
        this.next = next;
    }
}
```