# gist-it
从Github Repository生成embed文件, 像gist一样, 可以嵌套到其他页面中. 效果如下:

## Usage
- `fork`本项目, 然后删除`data`目录里的所有文件, 并修改`repository_name`文件的内容替换成你的信息  
- `clone`后, 在项目目录中运行`./gist-it.sh`,  例子如下:  
``` shell
./gist-it.sh https://github.com/SaulLawliet/gist-it/blob/master/gist-it.sh
# 成功后你将看到类似下面的内容
Embed URL: <script src="https://rawgit.com/SaulLawliet/gist-it/master/data/SaulLawliet/gist-it-master-gist-it.sh.js"></script>
!!! push到Github后有效
```
- 将生成的文件`push`到`Repository`后, 即可使用你的Embed URL, 效果跟Gist基本一样噢;)

## TODO
- 本地生成方式增加其他语言实现(欢迎贡献😘)
- 提供一个服务专门生成这样的js文件, 毕竟本地生成的过程稍微繁琐了一些.

## NOTDO
- 支持行数, 比如想展示某个文件的2-10行, 更好的选择是[Gist](https://gist.github.com/)

## Q&A
Q: 为什么要用RawGit的服务?  
A: [戳这里](http://stackoverflow.com/questions/17341122/link-and-execute-external-javascript-file-hosted-on-github)

## 效果图太大所以放到最后
![image](https://github.com/SaulLawliet/gist-it/blob/master/screencast.png)
