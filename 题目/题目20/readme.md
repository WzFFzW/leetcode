给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

判断括号是否对齐是一道很金典的题目

解法很简单，只是简单的入栈和出栈就可以了

设立一个映射表
> new Map().set('}', '{').set(')', '(').set(']', '[');

当遇到```[ { (```的时候入栈
当遇到```] } ) ```的时候取出栈顶元素
用映射表映射过后看看是否等于取出的栈顶元素，如果是就继续，不是就可以返回false
遍历完成之后，判断这个栈是否为空，不为空也是返回false