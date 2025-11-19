const products = [
    { name: "Laptop", category: "teknoloji", img: "images/betkom.png", link: "https://affiliate-link.com/laptop" },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "https://affiliate-link.com/watch" },
    { name: "Spor Ayakkabı", category: "spor", img: "images/betkom.png", link: "https://affiliate-link.com/shoes" },
    { name: "Kahve Makinesi", category: "ev", img: "images/betkom.png", link: "https://affiliate-link.com/coffee" },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
    { name: "Akıllı Saat", category: "teknoloji", img: "images/betkom.png", link: "#", gift: null },
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');

function displayProducts(filter = 'all') {
    productList.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    filtered.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <a href="${product.link}" target="_blank">Satın Al</a>
        `;
        productList.appendChild(div);
    });
}
// Popup elemanları
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Sayfa yüklendiğinde popup aç
window.addEventListener('load', () => {
    popup.style.display = 'block';
});

// Kapatma butonuna tıklayınca popup kapansın
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Popup dışında tıklayınca kapansın
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

categoryFilter.addEventListener('change', (e) => displayProducts(e.target.value));

// İlk yüklemede tüm ürünleri göster
displayProducts();
