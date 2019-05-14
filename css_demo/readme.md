# 说明

行内元素一般是内容的容器，而块级元素一般是其他容器的容器，行内元素适合显示具体内容，而块级元素适合做布局。

## block

块级元素： 独占一行，对宽高的属性值生效；如果不给宽度，块级元素就默认为浏览器的宽度，即 100% 宽；

块级元素主要有：

``` css
header,form,ul,ol,table,article,div,hr,aside,figure,canvas,video,audio,footer
```

> display:inline 为行内元素；display:inlibe-block 为行内块元素，两者有区别.

## inline 行内元素的默认值。

- 可以多个标签存在一行，对宽高属性值不生效，完全靠 **内容** 撑开宽高。
- 行内元素 margin-top 和 margin-botton 属性不生效。
- 块级元素可以设置weith和height，行内元素设置width和height无效，而且块级元素即使设置宽度也还是独占一行。注意但块级元素当没有明确指定 width 和 height 值时，块级元素尺寸由内容确定，当指定了 width 和 height 的值时，内容超出块级元素的尺寸就会溢出，这时块级元素要呈现什么行为要看其 overflow 的值（visible,hidden,overflow,scroll)
- 行内元素的padding-top和padding-bottom会起作用，不过就像脱离了标准流一样（即padding-left和padding-right的层级比其他元素高），并不会占据位置，并且还把其他元素给盖住了。但是，假如inline的元素没有内容，“padding-top、padding-bottom"将不起作用。如果想要起作用，只需要给padding-left或者padding-right设置一个值，或者当inline的元素有内容时就会起作用。
- text-align 属性对块级元素起作用，对行内元素不起作用 `text-align: center`

行内元素主要有：

``` css
a,b,strong,span,img,label,button,input,select,textarea
```

## inline-block

结合的行内和块级的优点，既可以设置长宽，可以让padding和margin生效，又可以和其他行内元素并排。

行内块元素：

```css
 img,input
```

## table-cell

同级元素使用 table-cell

- table-cell 两侧相同高度，可以垂直居中显示;
- margin 属性无效；
- padding 有效

父元素使用 table-cell

- 父元素使用 table-cell，vertical-align:  middle;
- 子元素设置 display:inline-block;vertical-align:middle;
- 子元素等高且垂直居中

## 行内元素与块状元素的转换

float,position,display

### float

- float 将行内元素转换为行内块元素，可以设置宽高以及 margin 值
- float 将块级元素转换为行内块元素

### position

- 将行内元素转换为行内块元素
- 将块级元素转换为行内块元素

## display 可能的值

------
值 | 说明
------ | ---
inline | 以行内元素行为展示
inline-block | 行内元素和块元素特性兼而有之，既不会沾满父元素，又可以设置 width 和 height
block | 以块元素行为展示
table | 以表格的形式展示
table-cell | 以表格单元格的形式展示
table-row | 以表格行的形式展示
table-column | 以表格列的形式展示
flex | css 3 新增。IE 从 11 开始部分支持，类似块级元素，但是可以用于制作自适应布局
inline-flex | 类似行内元素，但是可以用于制作自适应布局
grid | css3 新增,只得到 IE11 和 edge 的部分支持
