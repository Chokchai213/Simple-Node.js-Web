const http = require('http');
const fs = require('fs');
const port = 8080;
const host = 'localhost';

var app = http.createServer(function (req, res){
    if(req.url==='/'||req.url===''){
        console.log(req.url);
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }else if(req.url==='/about'){
        console.log(req.url);
        fs.readFile('about.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }else if(req.url==='/contact-me'){
        console.log(req.url);
        fs.readFile('contact.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }else{
        console.log(req.url);
        fs.readFile('404.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
});


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
