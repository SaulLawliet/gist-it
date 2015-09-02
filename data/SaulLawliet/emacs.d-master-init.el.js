document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist/embed-3313cb70789df61d3bb75cd878325a1266ccab50b6aac9b80f1691ae0694a216.css">')
document.write('<div class=\"gist\">  <div class=\"gist-file\">    <div class=\"js-gist-file-update-container js-task-list-container file-box\">      <div class=\"file\">  <div class=\"blob-wrapper data type-emacs-lisp\">      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">      <tr>        <td id=\"L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>        <td id=\"LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;;-------------------------------------------------- <\/span><\/td>      <\/tr>      <tr>        <td id=\"L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>        <td id=\"LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;; 自定义 <\/span><\/td>      <\/tr>      <tr>        <td id=\"L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>        <td id=\"LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;;-------------------------------------------------- <\/span><\/td>      <\/tr>      <tr>        <td id=\"L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>        <td id=\"LC4\" class=\"blob-code blob-code-inner js-file-line\">(<span class=\"pl-c1\">setq<\/span> make-backup-files <span class=\"pl-c1\">nil<\/span>) <span class=\"pl-c\">;; 关闭备份文件功能<\/span><\/td>      <\/tr>      <tr>        <td id=\"L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>        <td id=\"LC5\" class=\"blob-code blob-code-inner js-file-line\">(<span class=\"pl-c1\">setq<\/span> inhibit-startup-screen <span class=\"pl-c1\">t<\/span>) <span class=\"pl-c\">;; 关闭欢迎页面<\/span><\/td>      <\/tr>      <tr>        <td id=\"L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>        <td id=\"LC6\" class=\"blob-code blob-code-inner js-file-line\">(<span class=\"pl-c1\">setq<\/span> speedbar-show-unknown-files <span class=\"pl-c1\">t<\/span>) <span class=\"pl-c\">;; 让speedbar显示所有文件<\/span><\/td>      <\/tr>      <tr>        <td id=\"L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>        <td id=\"LC7\" class=\"blob-code blob-code-inner js-file-line\"><\/td>      <\/tr>      <tr>        <td id=\"L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>        <td id=\"LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;;-------------------------------------------------- <\/span><\/td>      <\/tr>      <tr>        <td id=\"L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>        <td id=\"LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;; 插件配置脚本<\/span><\/td>      <\/tr>      <tr>        <td id=\"L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>        <td id=\"LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;;-------------------------------------------------- <\/span><\/td>      <\/tr>      <tr>        <td id=\"L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>        <td id=\"LC11\" class=\"blob-code blob-code-inner js-file-line\">(add-to-list &#39;load-path (expand-file-name <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>lisp<span class=\"pl-pds\">&quot;<\/span><\/span> user-emacs-directory))<\/td>      <\/tr>      <tr>        <td id=\"L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>        <td id=\"LC12\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-utils)<\/td>      <\/tr>      <tr>        <td id=\"L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>        <td id=\"LC13\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-elpa)<\/td>      <\/tr>      <tr>        <td id=\"L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>        <td id=\"LC14\" class=\"blob-code blob-code-inner js-file-line\"><\/td>      <\/tr>      <tr>        <td id=\"L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>        <td id=\"LC15\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-company) <span class=\"pl-c\">;; 代码自动补全<\/span><\/td>      <\/tr>      <tr>        <td id=\"L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>        <td id=\"LC16\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-evil) <span class=\"pl-c\">;; 将快捷键改成vim<\/span><\/td>      <\/tr>      <tr>        <td id=\"L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>        <td id=\"LC17\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-smex) <span class=\"pl-c\">;; 方便M-x后输入命令<\/span><\/td>      <\/tr>      <tr>        <td id=\"L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>        <td id=\"LC18\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-markdown) <span class=\"pl-c\">;; 支持md语法<\/span><\/td>      <\/tr>      <tr>        <td id=\"L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>        <td id=\"LC19\" class=\"blob-code blob-code-inner js-file-line\"><\/td>      <\/tr>      <tr>        <td id=\"L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>        <td id=\"LC20\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-dev-env-c) <span class=\"pl-c\">;; C开发环境<\/span><\/td>      <\/tr>      <tr>        <td id=\"L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>        <td id=\"LC21\" class=\"blob-code blob-code-inner js-file-line\"><\/td>      <\/tr>      <tr>        <td id=\"L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>        <td id=\"LC22\" class=\"blob-code blob-code-inner js-file-line\"><\/td>      <\/tr>      <tr>        <td id=\"L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>        <td id=\"LC23\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;; 终端下不加载主题<\/span><\/td>      <\/tr>      <tr>        <td id=\"L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>        <td id=\"LC24\" class=\"blob-code blob-code-inner js-file-line\">(<span class=\"pl-k\">when<\/span> (not (<span class=\"pl-k\">eq<\/span> window-system &#39;<span class=\"pl-c1\">nil<\/span>))<\/td>      <\/tr>      <tr>        <td id=\"L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>        <td id=\"LC25\" class=\"blob-code blob-code-inner js-file-line\">  (require &#39;init-theme))<\/td>      <\/tr>      <tr>        <td id=\"L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>        <td id=\"LC26\" class=\"blob-code blob-code-inner js-file-line\"><\/td>      <\/tr>      <tr>        <td id=\"L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>        <td id=\"LC27\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;;-------------------------------------------------- <\/span><\/td>      <\/tr>      <tr>        <td id=\"L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>        <td id=\"LC28\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;; 最后加载用户自定义配置<\/span><\/td>      <\/tr>      <tr>        <td id=\"L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>        <td id=\"LC29\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">;;-------------------------------------------------- <\/span><\/td>      <\/tr>      <tr>        <td id=\"L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>        <td id=\"LC30\" class=\"blob-code blob-code-inner js-file-line\">(<span class=\"pl-k\">when<\/span> (file-exists-p (expand-file-name <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>init-local.el<span class=\"pl-pds\">&quot;<\/span><\/span> user-emacs-directory))<\/td>      <\/tr>      <tr>        <td id=\"L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>        <td id=\"LC31\" class=\"blob-code blob-code-inner js-file-line\">  (error <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Please move init-local.el to ~\/.emacs.d\/lisp<span class=\"pl-pds\">&quot;<\/span><\/span>))<\/td>      <\/tr>      <tr>        <td id=\"L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>        <td id=\"LC32\" class=\"blob-code blob-code-inner js-file-line\">(require &#39;init-local <span class=\"pl-c1\">nil<\/span> <span class=\"pl-c1\">t<\/span>)<\/td>      <\/tr><\/table>  <\/div>      <\/div>    <\/div>  <\/div>  <div class=\"gist-meta\">    <a href=\"https:\/\/github.com\/SaulLawliet\/emacs.d\/raw\/master\/init.el\" style=\"float:right\">view raw<\/a>    <a href=\"https:\/\/github.com\/SaulLawliet\/emacs.d\/blob\/master\/init.el\">init.el<\/a>    made with 😊  by <a href=\"https:\/\/github.com\/SaulLawliet\/gist-it\">Saul Lawliet<\/a>    hosted with with ❤ by <a href=\"https:\/\/github.com\">Github<\/a>  <\/div><\/div>')
