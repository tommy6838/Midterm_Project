// cart.js

// 建立一個空的購物車陣列，用來儲存加入購物車的商品
var cart = [];

// 查找所有 "加入購物車" 按鈕，並為每個按鈕添加一個點擊事件監聽器
var addToCartButtons = document.querySelectorAll('.add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        // 取得被點擊的按鈕上設定的商品名稱和價格
        var productName = this.getAttribute('data-product');
        var productPrice = this.getAttribute('data-price');

        // 將商品加入購物車陣列
        cart.push({ name: productName, price: productPrice });

        // 每次加入商品後，更新購物車顯示
        updateCartDisplay();
    });
}

// 定義一個函數，用於更新購物車的顯示內容
function updateCartDisplay() {
    // 查找購物車項目的顯示位置
    var cartItems = document.getElementById('cart-items');
    // 清空購物車顯示區域，以便重新顯示最新的購物車內容
    cartItems.innerHTML = '';

    // 遍歷購物車陣列，為每個商品創建一個列表項並顯示
    for (var i = 0; i < cart.length; i++) {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        // 顯示商品名稱和價格
        li.textContent = cart[i].name + " - $" + cart[i].price;
        cartItems.appendChild(li);
    }
}

// 查找 "結帳" 按鈕，並為其添加點擊事件監聽器
var checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', function() {
    // 如果購物車中有商品
    if (cart.length > 0) {
        alert('購買成功！');
        // 跳轉到購買成功頁面
        window.location.href = 'success.html';
    } else {
        // 如果購物車是空的，顯示提示信息
        alert('購物車為空，請先加入商品。');
    }
});