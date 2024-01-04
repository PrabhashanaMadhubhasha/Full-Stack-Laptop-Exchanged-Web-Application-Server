#! /usr/bin/bash
# STRING = "Null Byte"
# echo "khgtgkg 5jkgg $STRING"
# echo "What yr name?"
# read name
# if [ $name ];then
# echo "gtgtttt $name lddkd"
# else
# echo "dhdddhdhjs"
# fi
NAME="server"
echo "reading"
read name
echo "$name"
if [ "$name" == "build" ]; then
echo "build"
npm install
npm run build
docker build -t "$NAME" .
elif [ "$name" == "run" ]; then
docker run -p 8000:8000 "$NAME"
else
echo "end"
fi
