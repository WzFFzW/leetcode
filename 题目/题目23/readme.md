合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

合并k个有序链表，其实就和合并2个有序链表是一样的，两两进行合并，就变成了k/2个链表，依次下去，就是最终结果

可能我的写法有问题，执行时间略微有点长，待改进

这道题leetcode有个坑爹的点，就是如果传入lists是空数组的时候，记得要返回一个链表的next，不然好像就一直没办法通过