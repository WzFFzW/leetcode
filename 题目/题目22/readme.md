给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：
```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

这道题的答案是从网上看到的，不是最好的，但是绝对是最清晰的

看代码我已经觉得很清晰了，
l, r分别存储了左括号和右括号的数量
l, r最大值是n，且l和r是成对的。
当l < n的时候，字符串增加'('， 重新进入递归
当l > r的时候，字符串增加')', 在重新进入递归
递归的退出是 l和r都等于n的时候