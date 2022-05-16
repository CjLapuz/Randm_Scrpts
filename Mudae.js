const ignoreNotes = ["🤝"];

let fs = require("fs");

//let cmd = "$l ";
let cmd = "$add ";

const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");

let inputFile = readFileLines("a.txt");

// wl generator
// inputFile.forEach((wifeNote, indx) => {
//   let wife = "",
//     note = "";

//   if (wifeNote.includes("|")) {
//     [wife, note] = wifeNote.split("|");
//   } else {
//     [wife] = wifeNote.split("\r");
//   }

//   if (!ignoreNotes.includes(note)) {
//     cmd = `${cmd}${wife}${indx < inputFile.length - 1 ? "$" : ""}`;
//   }
// });

// adl generator

inputFile.forEach((series, indx) => {
  if (series.includes("-") && series.includes("/")) {
    const [title] = series.split("-");
    cmd = `${cmd}${title}${indx < inputFile.length - 1 ? "$" : ""}`;
  }

  // let wife = "",
  //   note = "";
  // if (wifeNote.includes("|")) {
  //   [wife, note] = wifeNote.split("|");
  // } else {
  //   [wife] = wifeNote.split("\r");
  // }
  // if (!ignoreNotes.includes(note)) {
  //   cmd = `${cmd}${wife}${indx < inputFile.length - 1 ? "$" : ""}`;
  // }
});

fs.writeFileSync("cmd.txt", cmd);
