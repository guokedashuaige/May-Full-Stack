// using the http.request() method:
let finalResponse = "";
const request = require("http").request(
  {
    hostname : "www.some_remote_system.com",
    port : 80,
    path : "/someAPI",
    method : "POST"
  },
  (inResponse) => {
    console.log(`STATUS: ${inResponse.statusCode}`);
    inResponse.setEncoding("utf8");
    // inResponse.on("data", (inDataChunk) => ({
    //   finalResponse += inDataChunk. 
    // });
    inResponse.on("end", () => {
      console.log(finalResponse);
}); }
);
request.write("Some data to send to the remote system");
request.end();