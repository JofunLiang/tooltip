# tooltip

纯 CSS 鼠标提示工具。

预览[DEMO](https://jofunliang.github.io/tooltip/)效果。

# 安装

**npm 安装**
```
npm install tooltip-core --save
```

**yarn 安装**
```
yarn add tooltip-core
```

**浏览器安装**

只需在页面中引入 dist 文件夹下的"tooltip.css"或“tooltip.min.css”文件即可。如：

```
<link rel="stylesheet" href="css/tooltip.css" />

or(或）

<link rel="stylesheet" href="css/tooltip.min.css" />
```

# 使用

1、在需要显示提示的标签上添加**data-tooltip**属性和**data-tooltip-text**两个属性；

2、**data-tooltip**属性值代表方向，可以设置为“left”、“right”、“top”、“bottom”、“top-left”、“top-right”、“bottom-left”和“bottom-right”中的任意一个值；

3、**data-tooltip-text**属性存放的是显示所需的文本。

如：
```
<p data-tooltip="left" data-tooltip-text="左边提示">左边提示</p>			
```

文本换行：在要换行的地方添加**&#010**字符
如：
```
<p data-tooltip="right" data-tooltip-text="右边提示样式 &#010 这个是右边提示样式哦 &#010 css3提示样式">右边提示</p>
```

# 兼容性：
1）IE9、IE9+

2）Firefox

3）Chrome

4）360 Browser

5）Sogou Explorer


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
