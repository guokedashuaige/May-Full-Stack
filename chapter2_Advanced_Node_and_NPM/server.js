const fs = require("fs");
const server = require("https").createServer(
  {
    key : fs.readFileSync("my_key.pem"),
    cert : fs.readFileSync("my_cert.pem")
}, (inRequest, inResponse) => {
  inResponse.writeHead(200);
  inResponse.end("I am protected by TLS!");
}).listen(443);

