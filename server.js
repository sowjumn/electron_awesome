const http = require('http');
require('dotenv').load();

var fs = require('fs');
var readIndex = fs.createReadStream('./index.html');

const server = http.createServer(function (req, res) {
  var token_maps = 'maps_token=' + process.env.MY_MAPS_API_KEY;
  res.setHeader('Set-Cookie', [token_maps])
  readIndex.pipe(res);
  console.log('message sent!')
})

server.listen(8080);