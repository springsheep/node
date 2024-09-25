const fs = require("fs");
// 1.读取文件 readFile
// 2.写入文件 writeFile
// 3.createReadStream 创建可读的流 一段一段的返回
// 4.创建文件夹\
// 5.删除文件
// 6.重命名
// 7.监听文件变化
// 8.源码 lubuv
const path = require("path");
// fs.readFile(path.join(__dirname, "test.txt"), "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// let res = fs.readFileSync(path.join(__dirname, "test.txt"));
// console.log("🚀 ~ res:", res.toString("utf8"));

// const readStream = fs.createReadStream(path.join(__dirname, "test.txt"));
// readStream.on("data", (chunk) => {
//   console.log(chunk.toString("utf8"));
// });
// readStream.on("end", () => {
//   console.log("end");
// });

// fs.mkdirSync(path.join(__dirname, "test1.js"), (err) => {});
// fs.renameSync(path.join(__dirname, "test2.js"), path.join(__dirname, "test3.js"));

// fs.watch(path.join(__dirname, "test.txt"), (eventType, filename, change) => {
//   console.log(eventType, filename, change);
// });

//1.写入文件
//2.追加文件
// fs.writeFileSync(path.join(__dirname, "test.txt"), "hello world ", {
//   flag: "a",
// });
//3.写入流
// const writeStream = fs.createWriteStream(path.join(__dirname, "test.txt"));
// writeStream.write("hello world", "utf8", () => {
//   console.log("写入成功");
// });
// writeStream.end();
//4.软连接和硬链接
//fs.linkSync(path.join(__dirname, "test.txt"), path.join(__dirname, "test1.txt"));
//软链接需要管理员权限
// fs.symlinkSync(path.join(__dirname, "test.txt"), path.join(__dirname, "test1.txt"));
