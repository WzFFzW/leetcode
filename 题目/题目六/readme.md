将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
```
L   C   I   R
E T O E S I I G
E   D   H   N
```
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

这题看起来很简单，暴力解决
>直接把原字符串放进按规则放进二位数组里面，在遍历二维数组取值加起来，看起来很简单

上述方法确实解决了问题
但是有一个更加简单的办法

把空的元素去掉
```
LCIR
ETOESIIG
EDHN
```
按序加起来就是结果。

假设行数为n ，字符串为s， 有一个变量标示当前方向direction
有一个长度为n的数组arr

当数组的arr_index为0或者n - 1的时候，
方向就会改变

1. 遍历字符串s, index是下标
2. 将字符s[index]推进arr[arr_index]
3. 如果此时arr_index为0或者n - 1的时候，方向改变，arr_index从递减变成递加（或者是从递加变成递减）
最终出来的arr ，就是：
```
LCIR
ETOESIIG
EDHN
```
