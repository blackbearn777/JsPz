let express = require('express');
let mysql = require('mysql');
let app = express();
let ejs = require('ejs');
let bodyParser = require("body-parser");
var session = require('express-session');
let urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('Views','/Views');
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'))
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.listen(3000, ()=>{
    console.log('Server started');
});;
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'users'
});
conn.connect((a)=>{
    if(a) throw a;
    console.log('connected');
});
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/login',(req,res)=>{

    res.render('login',{

    });
});
app.post('/loginUser',urlencodedParser,(req,res)=>{

    res.send(req.body.uname);
});
app.post('/logUser',urlencodedParser,(req,res)=>{

})
app.post('/regUser',urlencodedParser,(req,res)=>{
    let login = req.body.login;
    let email = req.body.email;
    let password = req.body.psw;
    let passwordRepeat = req.body.pswRepeat;
    query_select ='SELECT * FROM user WHERE login = ? '
    conn.query(query_select,[login],(err,result)=>{
       if(result>0){
        res.send('This user already exist');
    } 
    })
    if(password == passwordRepeat){
    query_ins = 'INSERT INTO user(login,email,password) VALUES (? , ?, ?)';
    conn.query(query_ins,[login,email,password], (err, results)=>{
       res.render('index');
    })
    }
    else{
        res.send('password not the same');
    }
})


app.post('/register',(req,res)=>{
res.render('register',{

})
    
});