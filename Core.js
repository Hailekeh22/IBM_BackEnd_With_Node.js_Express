//The most Important core Modules are http, path, fs, os, util, and querystring

//http - allows us to transfer data over http

let http = require("http");
http
  .createServer(function (req, res) {
    res.write("hello from server"); //write a response to the client
    res.end(); //end of response from server
  })
  .listen(6000); //the server instance listens for http requests on port 6000

/*fs - allows us to interact with file system also for IO*/

// sample code to read a file synchronously using the fs.readFile() method
const fs = require("fs");
const data = fs.readFile("sample.txt", "utf8");
// print contents of the file "sample.txt" to console
console.log(data);

/*os - provides a method to retrive information from the operating system */

let os = require("os");
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());

/*path - allows us to retrive and manipulate directory and file path */

const path = require("path");
let result = path.basename("/content/index/home.html");
console.log(result); //outputs home.html to the console

/* util - module is intended for internal use for accomplishing such tasks as debugging and deprecating functions. */

let util = require("util");
let str = "The loop has executed %d time(s).";
for (let i = 1; i <= 10; i++) {
  console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}

/* URL - module is used to divide up a web address into readable parts. */

const url = require("url");
let webAddress =
  "http://localhost:2000/index.html?lastName=Kent&firstName=Clark";
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark

/* querystring - provides methods to parse through the query string of a URL. */

let qry = require("querystring");
let qryParams = qry.parse("lastName=Kent&firstName=Clark");
console.log(qryParams.firstName); //returns Clark
