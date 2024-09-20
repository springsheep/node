//引入 os
const os = require("os");
const { exec } = require("child_process");
const platform = os.platform();
const open = (url) => {
  if (platform === "win32") {
    exec(`start ${url}`);
  }
};
// open("www.baidu.com");
console.log(os.networkInterfaces());
//计算cpu的利用率
const cpus = os.cpus();
let totalIdle = 0,
  totalTick = 0;
cpus.forEach((cpu) => {
  for (type in cpu.times) {
    totalTick += cpu.times[type];
  }
});
console.log(totalTick);
