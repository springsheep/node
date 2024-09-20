#! /bin/bash
const { exec, execSync, spawn, spawnSync, execFile } = require("child_process");
execSync("git add .", (error, stdout, stderr) => {});
execSync('git commit -m "commit"', (error, stdout, stderr) => {});
execSync("git push", (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
});
