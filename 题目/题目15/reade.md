给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

其实这道题的难点在于找出满足条件的三元组的同时，还要在去重

如果是暴力解决，可以参照两数之和的解法，然后再去重。也是正确的，但是有更好的方法

举个例子
[-1, 0, 1, 2, -1, -4] 排序完后 [-4, -1, -1, 0, 1, 2]

选出来的三个数字要满足 a + b + c = 0

其实会出现重复的情况就是选中的符合要求abc会乱序，
那么我们就假定好a是在数组最前面的 b和c只能在a之后（也就是说，选中的三个数中，a一定是最小的）

那么就可以避免abc乱序重复选中，当然这一切要建立在数组已经是排序好了的，
不然可能会漏了符合要求的三元组（最小的数不一定在最左边）

步骤就很明了
1. 遍历排序好了的数组
2. 两个指针分别指向index + 1和 nums.length - 1
3. 判断nums[index] + nums[index + 1] + nums[nums.length - 1]的和
  3.1 sum > 0就 右边的指针减小
  3.2 sum < 0就 左边指针增加
  3.3 sum = 0就 将三个数组推入数组，同时要判断两个指针向内靠拢的时候，去除和满足条件一样的数字，以防数字重复（eg [0, 0, 0, 0]和[-1， -1， -1， -1，0，2，2，2] 这些情况下的产生的重复）

