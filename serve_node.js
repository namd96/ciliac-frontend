var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser')

app.listen(8080, function () {
    console.log("server running  on 8080");
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/build'));
app.get('/*', (req, res, next) => {  
    res.sendFile(__dirname + '/build/index.html')
})