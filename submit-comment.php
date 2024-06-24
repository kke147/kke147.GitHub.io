<?php
// 连接数据库
$link = mysqli_connect("localhost", "root", "2731", "used_book");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 获取评论内容
    $comment = $_POST['comment'];

    // 准备 SQL 语句
    $stmt = mysqli_prepare($link, "INSERT INTO comments (comment_content) VALUES (?)");

    // 绑定参数
    mysqli_stmt_bind_param($stmt, "s", $comment);

    // 执行语句
    mysqli_stmt_execute($stmt);
}

// 获取所有评论
$result = mysqli_query($link, "SELECT * FROM comments");

// 输出评论
while ($row = mysqli_fetch_assoc($result)) {
    echo "<p>".$row['comment_content']."</p>";
}

// 关闭连接等其他操作
mysqli_close($link);
?>