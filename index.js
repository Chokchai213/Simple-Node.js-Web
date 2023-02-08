//this server script is using Express to Render HTML
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = 8080;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
router.get('/about',function (req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
})
router.get('/contact-me',function (req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
})
router.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+'/404.html');
})
app.use('/',router);
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server listening on PORT : `,port);
})
