import fs from "fs";

const writer = fs.createWriteStream("fs.log");
writer.write("hello/t");
writer.write("usam/t");
writer.write("muhajir/t");
writer.end();

const reader = fs.createReadStream("fs.log");
reader.addListener("data", (data) => {
  console.log(data.toString());
});
