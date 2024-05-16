import fs from "fs";

fs.readFile("async.txt", (err, data) => {
  err && console.log(err);
  !err && console.log(data.toString());
});

console.log("Reading file...");
