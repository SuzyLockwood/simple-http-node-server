/*
Create an HTTP server on port 3000 with a request handler
that creates a file named hello-world.txt. You will be using
the fs module to do this. Write the content: "Hello to this
great world" to the hello-world.txt file.
*/

// Require modules we need.
const http = require('http');
const fs = require('fs');

const port = 3000;
/* Change the content of the file or alternatively
set fileContent to null to create an empty file. */
let fileContent = 'Hello to this great world';

// The absolute path of the new file with its name.
let filePath = 'hello-world.txt';

/* The fs.writeFile() method replaces the specified file and
content if it exists. If the file does not exist, a new file,
containing the specified content, will be created.
*/
const getFile = fs.writeFile(filePath, fileContent, err => {
  if (err) throw err;
  console.log('The file was successfully created!');
});

// Helper function to handle HTTP requests.
function requestHandler(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(getFile);
  res.end();
}

// Create the server and pass in the requestHandler function.
http
  .createServer(requestHandler)

  //listen for an HTTP request on port 3000 and 'console.log' to confirm.
  .listen(port, err => {
    if (err) {
      return console.log(`You have an error:  ${err}`);
    }
    console.log(`The server is listening on port ${port}.`);
  });
