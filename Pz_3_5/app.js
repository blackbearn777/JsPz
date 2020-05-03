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
app.listen(3000,  ()=>{
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
        message:''
    });
});
app.post('/logUser',urlencodedParser,(req,res)=>{
    let login = req.body.login;
    let password = req.body.psw;
    let query_select = "SELECT * FROM user WHERE login = ?";
    conn.query(query_select, [login], (err,result)=>{
        if(result){
            if(result[0].password == password){
                req.session.loggedin = true;
                req.session.username = login;
                req.session.psw = result[0].password;
                req.session.email = result[0].email;
                if(login == 'admin'){
                    let query_select = "SELECT * FROM user";
                    conn.query(query_select, [login],(err,results)=>{
                        res.render('allUsersPage',{
                            users:results
                        })
                    });
                }
                else{

                    res.render('userPage',{
                        message: 'Hello ' +login,
                        login:login,
                        email:result[0].email
                        
                    })
                }
            }
            else{
                res.render('login',{
                    message : 'Login or password incorrect'
                })
            }
        }
        else{
            res.render('login',{
                message : 'Login or password  incorrect'
            })
        }
    })
})
app.post('/regUser',urlencodedParser,(req,res)=>{
    let login = req.body.login;
    let email = req.body.email;
    let password = req.body.psw;
    let passwordRepeat = req.body.pswRepeat;
    let query_select ='SELECT login FROM user WHERE login = ? '
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
app.post('/editUser', urlencodedParser,(req,res)=>{
    res.render('editUserPage',{
        oldUserLogin:req.session.username,
        login: req.session.username,
        password: req.session.psw,
        email:req.session.email

    })
})
app.post('/acceptEdit',urlencodedParser,(req,res)=>{
    let oldLogin =req.body.oldUserLogin;
    console.log(oldLogin);
    let login =req.body.login;
    let email =req.body.email;
    let psw = req.body.newPsw;
    let query_update ='UPDATE user SET login = ?, email =?, password =? WHERE login =?';
        conn.query(query_update,[login,email,psw,oldLogin],(err,result)=>{
            if(err) throw err;
            res.render('userPage',{
                message: 'Welcome '+ login,
                login:login,
                email:email
            })
        })
    
})
app.post('/quit',urlencodedParser,(req,res)=>{
    res.render('login',{
        message:""
    })
})




app.post('/register',(req,res)=>{
res.render('register');  
});