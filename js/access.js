const itemsShow = [{
        id: 1,
        img: "./image/banner/1.PNG",
        title: "Khung Giờ Săn Sale",
    },
    {
        id: 2,
        img: "./image/banner/2.PNG",
        title: "Hàng Quốc Tế Rẻ Vô Địch",
    },
    {
        id: 3,
        img: "./image/banner/3.PNG",
        title: "FreeShip Xtra",
    },
    {
        id: 4,
        img: "./image/banner/4.PNG",
        title: "Ưu Đãi Thành Viên - Tới 50%",
    },
    {
        id: 5,
        img: "./image/banner/5.PNG",
        title: "Hoàn Xu Đơn Bất Kì",
    },
    {
        id: 6,
        img: "./image/banner/6.PNG",
        title: "Shopee Premium",
    },
    {
        id: 7,
        img: "./image/banner/7.PNG",
        title: "Brand Discount",
    },
    {
        id: 8,
        img: "./image/banner/8.PNG",
        title: "Tech Zone - Siêu Thị Điện Tử",
    },
    {
        id: 9,
        img: "./image/banner/9.PNG",
        title: "Săn Siêu Sale",
    },
    {
        id: 10,
        img: "./image/banner/10.PNG",
        title: "Deal Sốc Từ 1k",
    },
];
const place = document.querySelector(".access");

window.addEventListener("DOMContentLoaded", () => {
    let showItem = itemsShow.map((item) => {
        return `<a href="#" class="access__box">
                <img class="access__box--img" src="${item.img}">
                <span>${item.title}</span>
            </a>`;
    });
    showItem = showItem.join("");
    place.innerHTML = showItem;
});