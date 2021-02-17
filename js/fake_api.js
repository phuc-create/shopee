const showApi = document.querySelector(".fl-sale__infor");
fetch("https://fakestoreapi.com/products?limit=15")
    .then((res) => res.json())
    .then((json) => {
        show(json);
    });

async function show(apiItem) {
    let showItem = await apiItem.map((item) => {
        return `<div class="fl-sale__infor--box">
        <a href="#" style"">
                    <img src="${item.image}">
                    <div class="infor-absolute">
                        <p>30%</p>
                        <p>giảm</p>
                    </div>
                    <div style="padding:0px 15px 15px !important;width: 100%; position: relative;">
                        <p class="box--price"> <span>₫</span> ${item.price}0.999 </p>
                        <div class="box--infor-saler">
                            <p style="z-index: 2;color: #fff;font-weight:lighter;font-size: 15px;">50 đã bán</p>
                            <img src="./image/fire.png" alt="">
                        </div>
                    </div>
</a>
                </div>`;
    });

    showItem = showItem.join("");
    showApi.innerHTML = showItem;
}
/****Đây là để hiện cái button cho nó xem flash sale */
const prevforSale = document.querySelector(".fl-sale--prev");
const nextforSale = document.querySelector(".fl-sale--next");
const clientWidthsale = document.querySelector(".fl-sale__infor");

let currentWidth = 0;
widthSale = clientWidthsale.clientWidth;

prevforSale.style.opacity = "0";
prevforSale.style.visibility = "hidden";
nextforSale.addEventListener("click", () => {
    prevforSale.style.opacity = "1";
    prevforSale.style.visibility = "visible";

    currentWidth += widthSale;
    clientWidthsale.style.transform = "translateX(-" + currentWidth + "px)";
    if (currentWidth >= 2400) {
        nextforSale.style.opacity = "0";
        nextforSale.style.visibility = "hidden";
    }
});
prevforSale.addEventListener("click", () => {
    nextforSale.style.opacity = "1";
    nextforSale.style.visibility = "visible";
    console.log(currentWidth, widthSale);
    currentWidth -= widthSale; ///currentWidth = currentWidth - widthSale;

    clientWidthsale.style.transform = "translateX(-" + currentWidth + "px)";
    if (currentWidth <= 0) {
        prevforSale.style.opacity = "0";
        prevforSale.style.visibility = "hidden";
    }
});

/**show sản phẩm chỗ shoppe mall */
const showApiMall = document.querySelector(".mall--mid__products");
const arrayJson = [];
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        showMall(json);
    });

async function showMall(apiItemMall) {
    let showItemMall = await apiItemMall.map((itemMall) => {
        return `
             <div class="mall--mid__box"><a href="#">
             <img style="width:70%;height:160px;margin-bottom:20px" src="${
               itemMall.image
             }" class="mall--mid__box-img">
             <p class="mall--mid__box-content">${itemMall.title.substring(
               0,
               15
             )}</p>
             </a></div>
            `;
    });

    showItemMall = showItemMall.join("");
    showApiMall.innerHTML = showItemMall;
}

/*tùy chỉnh btn ở phần shopee mall */
const mallPrev = document.querySelector(".mall-btn--prev");
const mallNext = document.querySelector(".mall-btn--next");
const midMallProducts = document.querySelector(".mall--mid__products");
const boxProduct = document.querySelector(".mall--mid__box");
const widthofDiv = boxProduct.clientWidth * 4; //width của hiện tại
let currentPage = 0;
const eWidth = (boxProduct.clientWidth * 20) / 2;
const pageMall = Math.floor(eWidth / widthofDiv);

console.log(widthofDiv, eWidth, pageMall);

mallPrev.style.opacity = "0";
mallPrev.style.visibility = "hidden";

mallNext.addEventListener("click", () => {
    mallPrev.style.opacity = "1";
    mallPrev.style.visibility = "visible";
    currentPage++;
    if (currentPage > pageMall) {
        currentPage = 0;
        mallPrev.style.opacity = "0";
        mallPrev.style.visibility = "hidden";
    }

    console.log(currentPage);

    midMallProducts.style.transform =
        "translateX(-" + currentPage * widthofDiv + "px)";
});

mallPrev.addEventListener("click", () => {
    currentPage--;
    if (currentPage <= 0) {
        currentPage = 0;
        mallPrev.style.opacity = "0";
        mallPrev.style.visibility = "hidden";
    }

    console.log(currentPage);

    midMallProducts.style.transform =
        "translateX(-" + currentPage * widthofDiv + "px)";
});

const spShow = document.querySelector(".sp-nofixed");
fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((json) => {
    filedShow(json);
})

function filedShow(item) {
    let showNow = item.map((fullItem) => {

        return `<div class="sp--box">
                    <a href="#" style="color: #000;">
                        <div class="sp-like-box">
                            Yêu Thích
                        </div>
                        <div class="sp-increase-abs">
                            <span style="color: #ee4d2d;font-weight: bold;">18%</span>
                            <span style="color: #fff;font-weight: bold;text-transform: uppercase;">Giảm</span>
                        </div>
                        <img class="sp-img_main" src="${fullItem.image}" alt="">
                        <img class="sp-img_abs" src="https://cf.shopee.vn/file/9bf107352e3cf54b7435edaa43e36d6b">
                        <div class="sp--box-content">
                            <p class="sp--box-content-top">${fullItem.title.substring(0,30)}${fullItem.category}...</p>
                            <div class="sp--box-content-pr">
                                <span>
                                    <p>₫</p>
                                    <h4>${fullItem.price}0</h4>
                                </span>
                                <span>Đã bán 2${fullItem.id}0</span>
                            </div>
                        </div>
                        <a href="#" class="sp-hidden">Tìm sản phẩm tương tự</a>
                    </a>
                </div>`;

    });
    showNow = showNow.join("");
    spShow.innerHTML = showNow;
}
const widthHeader = 135;
const scrollFix = document.querySelector(".sp-fixed");
window.addEventListener("scroll", (e) => {
    var currentY = e.currentTarget.scrollY;
    if (currentY >= 2621 && currentY < 3790) {

        scrollFix.classList.add("active");

    } else {
        scrollFix.classList.remove("active");
    }
})