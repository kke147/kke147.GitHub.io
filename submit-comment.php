<?php
// �������ݿ�
$link = mysqli_connect("localhost", "root", "2731", "used_book");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // ��ȡ��������
    $comment = $_POST['comment'];

    // ׼�� SQL ���
    $stmt = mysqli_prepare($link, "INSERT INTO comments (comment_content) VALUES (?)");

    // �󶨲���
    mysqli_stmt_bind_param($stmt, "s", $comment);

    // ִ�����
    mysqli_stmt_execute($stmt);
}

// ��ȡ��������
$result = mysqli_query($link, "SELECT * FROM comments");

// �������
while ($row = mysqli_fetch_assoc($result)) {
    echo "<p>".$row['comment_content']."</p>";
}

// �ر����ӵ���������
mysqli_close($link);
?>