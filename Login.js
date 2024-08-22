// Login.js

// 模擬的帳號資料
const userDatabase = {
    username: "tommy6838",
    password: "123456"
};

// 當用戶提交表單時，檢查用戶名和密碼是否正確
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // 簡單的檢查邏輯
    if (enteredUsername == userDatabase.username && enteredPassword == userDatabase.password) {
        alert('登入成功！');
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', userDatabase.username); // 保存用戶名到 sessionStorage
        // 在 localStorage 中存儲登入狀態
        // 這裡可以跳轉到其他頁面或執行其他操作
        window.location.href = 'index.html';
        // 登入成功後跳轉到 index.html
    //   let logintext=  document.getElementById('login_text').innerHTML("登出");
    } else {
        alert('帳號或密碼錯誤');
    }
});