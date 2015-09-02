# gist-it
从Github Repository生成embed文件, 像gist一样, 可以嵌套到其他页面中.

## 用法
1. fork本项目, 然后删除`data`目录里的所有文件, 并修改`repository_name`文件的内容替换成你的库名字  
1. 暂时只有`Shell`版本(欢迎贡献其他语言版本), 在项目目录中运行`./gist-it.sh`, 后面加文件在Github的URL, 如下:  
``` shell
./gist-it.sh https://github.com/SaulLawliet/gist-it/blob/master/gist-it.sh
# 成功后你将看到类似下面的内容
# If you push your code to Github, then you can add next line to your page.
# <script src="https://rawgit.com/SaulLawliet/gist-it/master/data/SaulLawliet/gist-it-master-gist-it.sh.js"></script>
```
