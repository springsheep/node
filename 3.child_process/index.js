//1.exec

//2.exexSync 同步的方法
//执行较小的shell命令 想要立马拿到结果的shell 有字节上限200kb
const { exec, execSync, spawn, spawnSync, execFile, fork } = require("child_process");
const path = require("path");
// exec("node -v", (err, stdout, stderr) => {
//   console.log("🚀 ~ exec ~ stdout:", stdout.toString());
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
// let nodeV = execSync("node -v");
// execSync("start www.baidu.com");
// console.log("🚀 ~ execSync ~ stdout:", nodeV.toString());

//3.spawn
//执行较大的shell命令 没有字节上限

//4. spawnSync 同步的方法
// let a = spawnSync("netstat");
// console.log("🚀 ~ a:", a.stdout.toString());

// let a = execSync("nslookup www.baidu.com");
// let b = execSync("ping www.baidu.com");
// console.log("🚀 ~ a:", a.toString(), b.toString());

//6.execFile 执行可执行文件
// execFile(
//   path.resolve(__dirname, "./bat.sh"),
//   {
//     // cwd: path.resolve(__dirname, "./"),
//   },
//   (err, stdout, stderr) => {
//     console.log("🚀 ~ execFile ~ stdout:", stdout.toString());
//   }
// );

// execSync("node gitpush.js");
//底层实现顺序 exec=>exexSync=>spawn

//5.fork 只接受子进程  node.js
const childProcess = fork("./3.child_process/index.js");
childProcess.send("我是主进程");
process.exit();
