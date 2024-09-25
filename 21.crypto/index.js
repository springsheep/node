const crypto = require("crypto");

//1.对称加密算法
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);
// const cry = crypto.createCipheriv("aes-256-cbc", key, iv);
// cry.update("hello world", "utf8", "hex");
// let res = cry.final("hex");
// console.log(res);
// const de = crypto.createDecipheriv("aes-256-cbc", key, iv);
// de.update(res, "hex", "utf8");
// console.log(de.final("utf-8"));

//2.非对称加密算法
// const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
//   modulusLength: 2048,
//   publicKeyEncoding: {
//     type: "spki",
//     format: "pem",
//   },
//   privateKeyEncoding: {
//     type: "pkcs8",
//     format: "pem",
//   },
// });
// console.log("🚀 ~ publicKey, privateKey:", publicKey, privateKey);
// const enCode = crypto.publicEncrypt(publicKey, Buffer.from("hello world"));
// console.log("🚀 ~ enCode:", enCode.toString("hex"));
// const deCode = crypto.privateDecrypt(privateKey, enCode);
// console.log("🚀 ~ deCode:", deCode.toString("utf-8"));

//3.hash函数 不能解密 不可逆
const hash = crypto.createHash("sha256");
hash.update("hello world");
console.log(hash.digest("hex"));
