// 定義一個產品資料庫，包含頁面的關鍵字和對應的URL
const productPages = [
    {
        keywords: ['Nytillverkad', '經典', '沙發', 'POÄNG'],
        url: './shopping1.html'
    },
    {
        keywords: ['辦公家具', '升級', '辦公', 'MITTZON'],
        url: './shopping2.html'
    },
    {
        keywords: ['MITTZON', '辦公', '舒適', '空間'],
        url: './shopping3.html'
    },
    {
        keywords: ['2024', '開學季', '學習', '書桌'],
        url: './shopping4.html'
    },
    {
        keywords: ['IKEA', '開學季', '學生', '家具'],
        url: './shopping5.html'
    }
];

// 綁定搜尋表單的提交事件
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表單默認提交行為

    const query = document.getElementById('search-input').value.toLowerCase(); // 取得並轉換為小寫
    let matchedPage = null;

    // 遍歷所有產品資料，進行模糊搜尋
    for (let i = 0; i < productPages.length; i++) {
        const page = productPages[i];
        // 遍歷每個產品的關鍵字列表
        for (let j = 0; j < page.keywords.length; j++) {
            const keyword = page.keywords[j].toLowerCase();
            // 檢查關鍵字是否包含在用戶輸入中
            if (keyword.includes(query) || query.includes(keyword)) {
                matchedPage = page.url; // 找到匹配的頁面
                break;
            }
        }
        if (matchedPage) break; // 如果找到匹配，停止繼續搜尋
    }

    if (matchedPage) {
        window.location.href = matchedPage; // 跳轉到匹配的頁面
    } else {
        alert('找不到相關產品'); // 如果沒有找到匹配，顯示提示
    }
});