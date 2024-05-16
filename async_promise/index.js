import fs from "fs";

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      !err ? resolve(data.toString()) : reject(err);
    });
  });
};

getFile("async.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
