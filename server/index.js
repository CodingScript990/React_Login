const express = require('express');
const mysql = require('mysql');
const express_session = require('express-session');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test1234',
    database: 'react_login'
});

// session
/*
app.use(
    express_session({
        secret: 'tetete123',
        resave: false,
        saveUninitialized: false,
        store: require('express-mysql-session')(mysql),
        cookie: {maxAge:(3.6e+6) * 24}
    })
);
*/

// register
app.post('/register', (req, res) => {
    

    const username = req.body.username;
    const password = req.body.password;

    db.query('INSERT INTO register_user (username, password) VALUES (?, ?);', 
    [username, password], (err, result) => 
    { 
        if(err) {
            res.send({ err: err });
        }

        if(result) {
            res.send(
                {
                    message : '회원가입을 진심으로 축하합니다!'
                }
            );
        } 
    }
    );
});

// login
app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM register_user WHERE username = ? AND password = ?',
    [username, password], (err, result) =>
    {
        if(err) {
            res.send({ err: err });
        }

        if(result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "ID/Password를 다시한번 확인해 주세요!" });
        }
        }
    );
});

app.listen(3001, () => {
    console.log('runing server!');
});