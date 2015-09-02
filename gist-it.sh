#!/bin/bash

usage() {
    echo "Generate embed files from a github repository like a gist."
    echo "Usage: $0 url"
    exit 0
}

err() {
    echo "!!!ERROR!!! $@" >&2
    exit 1
}

# Check curl command
$(type curl > /dev/null)
if (( $? )); then
    err "You need to install curl first."
fi

# check url
if [[ $1 == "" || $1 == "--help" || $1 == "-h" ]]; then
    usage
fi
url_prefix="https://github.com/"
url=$1
if [[ $url != $url_prefix* ]]; then
    err "URL must prefix as \"https://github.com/\""
fi

url_type=$(echo "$url" |awk -F/ '{print $6}')
if [[ $url_type != "blob" ]]; then
    err "URL must in blob page."
fi

# generate original code
out_dir="data"
user_name=$(echo "$url" |awk -F/ '{print $4}')
file_name=$(echo "$url" |awk -F/ 'BEGIN{ORS="-"} {for(i=5;i<=NF;i++) if(i!=6) print $i}')
file_name=${file_name%?}

dir="$out_dir/$user_name"
if [[ ! -d $dir ]]; then
    $(mkdir -p $dir)
fi
file_name="${dir}/${file_name}"

$(cp templete/head.html $file_name)
$(curl -s $url | sed -nE '/^( )*<div class="blob-wrapper/,/^( )*<\/div/p' >> $file_name)

# 因为要用sed替换, 所以需要对URL里的\转义
code_file_name=$(echo "$url" |awk -F/ '{print $NF}')
code_raw_url=$(echo "$url" |sed 's/\/blob\//\/raw\//; s/\//\\\//g')
code_url=$(echo "$url" |sed 's/\//\\\//g')
$(sed "s/#RAW_URL#/${code_raw_url}/; s/#URL#/${code_url}/; s/#FILE_NAME#/${code_file_name}/" templete/foot.html >> $file_name)

data=$(sed 's/"/\\"/g; s/\//\\\//g' $file_name |tr -d '\n')
js_file_name="${file_name}.js"
echo "document.write('<link rel=\"stylesheet\" href=\"https://assets-cdn.github.com/assets/gist/embed-3313cb70789df61d3bb75cd878325a1266ccab50b6aac9b80f1691ae0694a216.css\">')" > $js_file_name
echo "document.write('$data')" >> $js_file_name

rm $file_name

repository_name=$(cat repository_name)
echo "Embed URL: <script src=\"https://rawgit.com/$repository_name/master/$js_file_name\"></script>"
echo "!!! push到Github后有效"
