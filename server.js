const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');

app.use(express.static( __dirname + '/angular-app/dist'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log("Listening on port 8000");
})