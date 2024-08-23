// 假設你有一個產品數據庫
const products = [
    {
        title: '產品1',
        description: '這是一個簡短的產品描述。',
        price: '$99.00',
        imgSrc: 'path/to/image1.jpg'
    },
    {
        title: '產品2',
        description: '這是一個簡短的產品描述。',
        price: '$199.00',
        imgSrc: 'path/to/image2.jpg'
    },
    // 其他產品數據...
];

const container = document.getElementById('product-container');

products.forEach(product => {
    const template = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${product.imgSrc}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><strong>${product.price}</strong></p>
            </div>
          </div>
        </div>
    `;

    container.innerHTML += template; // 將模板插入到容器中
});