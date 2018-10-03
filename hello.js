var http = require("https");

var options = {
  "method": "POST",
  "hostname": [
    "www",
    "netsparkercloud",
    "com"
  ],
  "path": [
    "api",
    "1.0",
    "scans",
    "new"
  ],
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Basic ZWFjZTQ5MGY0NDliNDRkOWIzNWNhN2RhMDE4NjEwMTc6RVkzc1Z0WXVZcHgzZUR2Z2NRcisvb0FXTmtid2k5TGVJcnRuTUVnVFQxVT0=",
    "Cache-Control": "no-cache",
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ TargetUri: 'http://php.testsparker.com',
  PolicyId: 'b20186662a01e411976c0a45dbb897e8' }));
req.end();