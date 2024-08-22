// 綁定搜尋表單的提交事件
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表單默認提交行為

    // 取得輸入框中的值
    let query = document.getElementById('search-input').value.toLowerCase();

    // 預定義的產品資料庫 (這裡僅為例子，可根據實際產品更新)
    let productPages = {
        '椅子': 'shopping1.html',
        '辦公': 'shopping2.html',
        '床': 'shopping3.html',
        '書桌': 'shopping4.html',
        // 'klippan': 'shopping5.html'
    };

    // 搜尋關鍵字是否匹配產品名稱
    if (productPages[query]) {
        window.location.href = productPages[query]; // 跳轉到對應產品頁面
    } else {
        alert('沒有找到相關產品'); // 如果沒有找到匹配，彈出提示
    }
});