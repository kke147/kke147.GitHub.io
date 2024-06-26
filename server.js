const express = require('express');
const mysql = require('mysql');

const app = express();

// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2731',
    database: 'used_book'
});

app.post('/submit-comment', (req, res) => {
    const comment = req.body.comment;
    const returnUrl = req.body.return_url;

    // 执行插入评论到数据库的操作
    connection.query('INSERT INTO comments (content) VALUES (?)', [comment], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('评论提交失败');
        } else {
            res.redirect(returnUrl);
        }
    });
});

app.listen(3000, () => {
    console.log('服务器启动，监听 3000 端口');
});