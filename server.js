const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 5000;

//bodyParser Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());



require("./routes/api-routes.js")(app);

//THIS IS HOW YOU SEND THE REACT APP!
app.use(express.static("client/build"));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})



// require("./routes/html-routes.js")(app);


app.listen(port, () => console.log(`Listening on port ${port}`));


