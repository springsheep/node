const EventEmitter = require("events");
//发布订阅模式 off on emit once
const emitter = new EventEmitter();
//订阅一个事件
//事件默认只能监听十个，超过十个会自动清除
emitter.setMaxListeners(21);
function name(params) {
  console.log("🚀 ~ name ~ params:", params);
}
emitter.on("click", name);
// emitter.off("click", name);

emitter.emit("click", 1);
emitter.emit("click", 1);
emitter.emit("click", 1);
console.log(Object.getPrototypeOf({}));
