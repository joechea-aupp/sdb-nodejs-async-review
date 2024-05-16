import fs from "fs";

async function getFiles(fileName) {
  return fs.promises.readFile(fileName);
}

const data = await getFiles("async.txt");

console.log(data.toString());
