import { writeLogLine, readLog, appendLogLine } from "./logger.mjs";

writeLogLine("log.txt", "This is a log message");
console.log(await readLog("log.txt"));
appendLogLine("log.txt", "This is another log message");
console.log(await readLog("log.txt"));
