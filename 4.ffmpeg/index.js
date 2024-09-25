const { execSync } = require("child_process");
//1 格式转换
//2 提起音频
//3 视频截图
//4 视频水印
//5 视频去除水印

execSync("ffmpeg -i input.mp4  -vf  drawtext=text='ceshi'  -c:v libx264 -c:a aac -b:a 128k output.mp4");
