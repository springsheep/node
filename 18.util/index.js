const util = require("util");
const { exec } = require("child_process");

// util.promisify(exec)
const execPromise = util.promisify(exec);

execPromise("node -v")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const promisify = (fun) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fun(...args, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  };
};
