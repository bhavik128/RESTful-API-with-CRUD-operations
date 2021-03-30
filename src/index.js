const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const personRoute = require("./routes/person");
const customerRoute = require("./routes/customer")
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body);
    next();
});

app.use(personRoute);

app.use(customerRoute);

app.use(express.static("public",{extended:true}));

//Handler for 404 - not found
app.use((req, res) => {
    res.status(404).send("We think you are lost!");
});

//Handler for 500 error
app.use(function(err,req,res) {
    res.status(500).sendFile(path.join(__dirname,"../public/500.html"));
})

app.listen(port,() => {
    console.log(`server started on port ${port}`);
});