// 获取书籍列表元素
const bookList = document.getElementById('book-list');

// 获取搜索框元素
const searchInput = document.querySelector('input[type="text"]');

// 为搜索框添加输入事件监听器
searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const books = bookList.getElementsByClassName('book');

    for (let i = 0; i < books.length; i++) {
        const bookTitle = books[i].querySelector('h3').innerText.toLowerCase();
        if (bookTitle.includes(searchText)) {
            books[i].style.display = 'block';
        } else {
            books[i].style.display = 'none';
        }
    }
});
