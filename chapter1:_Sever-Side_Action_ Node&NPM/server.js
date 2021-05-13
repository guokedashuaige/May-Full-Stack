// const { Server } = require("http");

// require("http").createServer((inRequest, inResponse) => {
//     inResponse.end("Hello from my first Node Web server");
//   }).listen(80);  
// //   then visit http://127.0.01
require("http").createServer((inRequest, inResponse) => {
    const requestModule = require("request");
    requestModule(
      "http://worldtimeapi.org/api/timezone/America/New_York",
      function (inErr, inResp, inBody) {
        inResponse.end(
          `Hello from my first Node Web servers: ${inBody}`
  ); }
    );
  }).listen(80);