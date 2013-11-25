(function() {
  var app, express, port;

  express = require("express");

  app = express();

  app.use(express.static(__dirname));

  port = process.env.PORT || 3000;

  app.listen(port);

  console.log("listening on port " + port);

}).call(this);
