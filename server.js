var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

//React? - Maybe that call goes here?

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get("/", function(req, res) {
    req.session.email = req.body.email;

    res.json(dbUser);
});

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));








