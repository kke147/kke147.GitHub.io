const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2731',
    database: 'used_book'
});

app.post('/submit-comment', (req, res) => {
    const comment = req.body.comment;
    const sql = 'INSERT INTO comments (comment_content) VALUES (?)';
    connection.query(sql, [comment], (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.redirect('/comments');
        }
    });
});

app.get('/comments', (req, res) => {
    const sql = 'SELECT * FROM comments';
    connection.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.send(rows.map(row => `<p>${row.comment_content}</p>`));
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});