# gist-it
从Github Repository生成embed文件, 像gist一样, 可以嵌套到其他页面中.

## 用法
1. `fork`本项目, 然后删除`data`目录里的所有文件, 并修改`repository_name`文件的内容替换成你的信息  
1. `clone`后, 在项目目录中运行`./gist-it.sh`,  例子如下:  
``` shell
./gist-it.sh https://github.com/SaulLawliet/gist-it/blob/master/gist-it.sh
# 成功后你将看到类似下面的内容
Embed URL: <script src="https://rawgit.com/SaulLawliet/gist-it/master/data/SaulLawliet/gist-it-master-gist-it.sh.js"></script>
!!! push到Github后有效
```
1. 将生成的文件`push`到`Repository`后, 即可使用你的Embed URL, 效果跟Gist基本一样噢;)
