import { spawn } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  const filePath = path.join(import.meta.dirname + "/files/script.js");
  const child = spawn("node", [filePath, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
