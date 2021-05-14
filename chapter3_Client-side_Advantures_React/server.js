const { Server } = require("http");

require("http").createServer((inRequest, inResponse) => {
    inResponse.end("Hello from my first Node Web server");
  }).listen(80);  
//   then visit http://127.0.01