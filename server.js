const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");


//Models
const db = require("./models");


var app = express();
var port = process.env.PORT || 5000;

//bodyParser Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require("./routes/api-routes.js")(app);

//THIS IS HOW YOU SEND THE REACT APP!
// app.use(express.static("client/build"));
app.use(express.static("build"));


app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// app.get('*', function (request, response) {
//     response.sendFile(__dirname, 'index.html')
// })

db.sequelize.sync().then(function () {
    app.listen(port, () => console.log(`Listening on port ${port}`));
});