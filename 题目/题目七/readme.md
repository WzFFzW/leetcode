给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
eg:
```
123 => 321
-123 => -321
```
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

这道题是个很简单的题，利用js自带的api可能会更快解决
1. 判断是不是负数，是负数则变成正数，然后记住
2. 将数字变成数组，调用reverse方法之后再变回数字
3. 看是否需要加上负号，然后进行越界判断

但是这个是算法题
就要用高级一点的写法
变量res表示取出的数字加起来之和
1. 将数字对10取余，可以获取到最后一个数字
2. 判断这个取出的数字和之前取出的数字加起来是否越界
- 如果res 已经大于 （最大值 / 10）取整，直接判断越界
- 如果res等于（最大值 / 10）取整，那么就看取出来的数字是否大于8（这个8是2^31 - 1最后那个尾数）
- 负数的判断相同
3. 没越界就将取出的数字加起来（res = res * 10 + pop）
