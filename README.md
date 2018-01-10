# tooltip.css

v. 1.0.1

更新日期：2018.1.10

更新内容：修复因淡入动画时间过长导致的眩晕感

# tooltip
纯CSS鼠标提示工具。

预览[DEMO](https://jofunliang.github.io/tooltip.html)效果。

# 安装

只需在页面中引入"tooltip.css"文件即可。

如：

```
<link rel="stylesheet" href="css/tooltip.css" />
```

# 使用

1、在需要显示提示的标签上添加**tooltip**属性和**tips**两个属性；

2、**tooltip**属性值代表方向，可以设置为“left”、“right”、“top”和“bottom”中的任意一个值；

3、**tips**属性存放的是显示所需的文本。

如：
```
<p tooltip="left" tips="左边提示">左边提示</p>		
<p tooltip="right" tips="右边提示">右边提示</p>		
<p tooltip="top" tips="上边提示">上边提示</p>		
<p tooltip="bottom" tips="下边提示">下边提示</p>	
```

# MIT License

Copyright (c) 2018 梁毫卓

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
