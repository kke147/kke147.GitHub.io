const express = require('express');
const mysql = require('mysql');

const app = express();

// �������ݿ�����
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2731',
    database: 'used_book'
});

app.post('/submit-comment', (req, res) => {
    const comment = req.body.comment;
    const returnUrl = req.body.return_url;

    // ִ�в������۵����ݿ�Ĳ���
    connection.query('INSERT INTO comments (content) VALUES (?)', [comment], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('�����ύʧ��');
        } else {
            res.redirect(returnUrl);
        }
    });
});

app.listen(3000, () => {
    console.log('���������������� 3000 �˿�');
});