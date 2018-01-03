# tooltip
纯CSS鼠标提示工具。

预览[demo](https://jofunliang.github.io/tooltip.html)效果。

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
