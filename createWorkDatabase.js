//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "static/_projects");
const projectsList = [];
//passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  // console.log(files, "the duck");
  // listing all files using forEach
  files.forEach(file => {
    // Do whatever you want to do with the file
    // console.log(file);
    projectsList.push(require("./static/_projects/" + file));
    //
    // addFile(file);
  });
});

console.log(projectsList, "dcad");
function addFile(file) {
  console.log(require("./static/_projects/" + file));
}
