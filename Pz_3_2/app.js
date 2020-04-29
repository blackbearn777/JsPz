let express = require('express');
let app = express();
let fs = require('fs');
app.listen(3002);

app.use(express.static(__dirname+'/public'));

app.post('/home',(req,res)=>{

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    let hh = String(today.getHours());
    let Mins = String(today.getMinutes());

    today = mm + '.' + dd + '.' + yyyy + "  "+hh+":"+Mins;
    let data = "|IpAdrClient " + req.ip + "| |PROTOCOL: "+ req.protocol+"| TIME: "+ today +"\n";
    res.send(data);
    fs.appendFile('txt.txt', data,()=>{});
});

app.get('/Second',(req,res)=>{
    res.sendFile(__dirname+'/public/SecondTask.html')
});
app.post('/Scan',(req,res)=>{

});




