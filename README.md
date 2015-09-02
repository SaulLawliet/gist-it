# gist-it
从Github Repository生成embed文件, 像gist一样, 可以嵌套到其他页面中.

## 用法
请fork本项目, 然后删除data目录里的所有文件, 并修改repository_name文件的内容替换成你的库名字  
暂时只有`Shell`版本(欢迎贡献其他语言版本), 到项目目录中运行`./gist-it.sh`, 后面加文件在Github的URL, eg:  
``` shell
./gist-it.sh https://github.com/SaulLawliet/gist-it/blob/master/gist-it.sh
# 成功后你将看到类似下面的内容
# If you push your code to Github, then you can add next line to your page.
# <script src="https://rawgit.com/SaulLawliet/gist-it/master/data/SaulLawliet/gist-it-master-gist-it.sh.js"></script>
```
push到库中, 添加`<script src="https://rawgit.com/SaulLawliet/gist-it/master/data/SaulLawliet/gist-it-master-gist-it.sh.js"></script>`到页面中, 将会看到跟gist嵌套一样的效果
