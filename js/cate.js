const cateArray = [{
        id: 1,
        img: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
        title: "Thời Trang Nam",
    },
    {
        id: 2,
        img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
        title: "Điện Thoại Và Phụ Kiện",
    },
    {
        id: 3,
        img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
        title: "Thiết Bị Điện Tử",
    },
    {
        id: 4,
        img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
        title: "Máy tính & Laptop",
    },
    {
        id: 5,
        img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
        title: "Máy ảnh - Máy quay phim",
    },
    {
        id: 6,
        img: "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
        title: "Đồng Hồ",
    },
    {
        id: 7,
        img: "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
        title: "Giày Dép Nam",
    },
    {
        id: 8,
        img: "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
        title: "Thiết Bị Điện Gia Dụng",
    },
    {
        id: 9,
        img: "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
        title: "Thể Thao & Du Lịch",
    },
    {
        id: 10,
        img: "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn",
        title: "Đồ Chơi",
    },
    {
        id: 11,
        img: "https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
        title: "Chăm sóc thú cưng",
    },
    {
        id: 12,
        img: "https://cf.shopee.vn/file/12039f0db7c3f025fb0c57b3490efad2_tn",
        title: "Sản Phẩm Khác",
    },
    {
        id: 13,
        img: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
        title: "Thời Trang Nữ",
    },

    {
        id: 14,
        img: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
        title: "Mẹ & Bé",
    },
    {
        id: 15,
        img: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
        title: "Nhà Cửa & Đời Sống",
    },
    {
        id: 16,
        img: "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
        title: "Giày Dép Nữ",
    },
    {
        id: 17,
        img: "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
        title: "Phụ Kiện Thời Trang",
    },
    {
        id: 18,
        img: "https://cf.shopee.vn/file/bba68b7dc2d664748dd075d500049d72_tn",
        title: "Sức Khỏe & Sắc Đẹp",
    },
    {
        id: 19,
        img: "https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn",
        title: "Voucher & Dịch vụ",
    },
    {
        id: 20,
        img: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
        title: "Nhà Sách Online",
    },
    {
        id: 21,
        img: "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
        title: "Giặt giũ & nhà cửa",
    },
    {
        id: 22,
        img: "https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
        title: "Thời Trang Trẻ Em",
    },
    {
        id: 23,
        img: "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
        title: "Túi Ví",
    },
    {
        id: 24,
        img: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
        title: "Nhà Sách Online",
    },
    {
        id: 24,
        img: "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
        title: "Ô tô Xe Máy Và Xe Đạp",
    },
];
const cateClass = document.querySelector(".cate__container");

window.addEventListener("DOMContentLoaded", () => {
    let showItem = cateArray.map((item) => {
        return `<a href="#" class="cate__container--box">
                    <div class="box--img">
                        <img src="${item.img}" alt="">
                    </div>
                    <span class="box--title">${item.title}</span>
                </a>`;
    });
    showItem = showItem.join("");
    cateClass.innerHTML = showItem;
});

/**active button in category */
const prevCate = document.querySelector(
    ".cate__container--prev.container--prev"
);
const nextCate = document.querySelector(
    ".cate__container--next.container--next"
);
const containerCate = document.querySelector(".cate__container");
/*translatex: 240 px*/

prevCate.style.opacity = "0";
nextCate.addEventListener("click", () => {
    containerCate.classList.add("active");
    prevCate.style.opacity = "1";
    nextCate.style.opacity = "0";
});
prevCate.addEventListener("click", () => {
    containerCate.classList.remove("active");
    prevCate.style.opacity = "0";
    nextCate.style.opacity = "1";
});