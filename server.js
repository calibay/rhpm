var express = require("express");
var app = express();


app.get('/', (req,res) => {
    res.redirect('/api/whoami');
});
app.get('/api/whoami', (req, res) => {
    res.set('Content-Type', 'application/json');
    //res.send(req.connection.remoteAddress);
    var ipAddress = req.headers['x-forwarded-for'];
    var language = req.headers["accept-language"].split(',')[0];
    var software = req.headers['user-agent'].match(/\(.+?\)/)[0];
    software = software.replace('(', '').replace(')', '');
    res.send({
        ipaddress: ipAddress, 
        language: language, 
        software: software});
    
});

app.listen(process.env.PORT);