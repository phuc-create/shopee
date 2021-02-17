const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imgContainer = document.querySelector(".img-wrapper");
const dotSlider = document.querySelector(".dots-slider");
const imgLength = document.querySelectorAll(".img-slider");
const dotLength = document.querySelectorAll(".dot");
let slideWidth = imgLength[0].clientWidth;
let currentSlide = 0;
let numberOfimages = imgLength.length;
//khởi tạo hàm silder ảnh
function init() {
    imgLength.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });
    imgLength[0].classList.add("active");
    createNavdots();
}
init();
//khởi tạo hàm active các dot mỗi lần click hoặc ảnh chạy slide
function createNavdots() {
    for (let i = 0; i < numberOfimages; i++) {
        const dotnew = document.createElement("div");
        dotnew.classList.add("dot");
        dotSlider.appendChild(dotnew);
        dotnew.addEventListener("click", () => {
            gotoSlide(i);
        });
    }
    dotSlider.children[0].classList.add("active");
}
let prevSlide = numberOfimages - 1;
/****preview slide */
prevBtn.addEventListener("click", () => {
    if (prevSlide <= 0) {
        gotoSlide(numberOfimages - 1);
        prevSlide = numberOfimages - 1;
        return;
    }
    prevSlide--;
    gotoSlide(prevSlide);
});

/*****next slide */

let nextSlide = 0;
nextBtn.addEventListener("click", () => {
    if (nextSlide >= numberOfimages - 1) {
        gotoSlide(0);
        nextSlide = 0;
        return;
    }
    nextSlide++;
    gotoSlide(nextSlide);
    setActivedots();
});

function gotoSlide(current) {
    imgContainer.style.transform = "translateX(-" + slideWidth * current + "px)";
    currentSlide = current;
    setActivedots();
}

//set active dot
function setActivedots() {
    const imgSlider = document.querySelector(".img-slider.active");
    imgSlider.classList.remove("active");
    imgLength[currentSlide].classList.add("active");

    const dotSlideactive = document.querySelector(".dot.active");
    dotSlideactive.classList.remove("active");
    dotSlider.children[currentSlide].classList.add("active");
}
//tự động đổi ảnh sau 5 giây
setInterval(() => {
    if (nextSlide >= numberOfimages - 1) {
        gotoSlide(0);
        nextSlide = 0;
        return;
    }
    nextSlide++;
    gotoSlide(nextSlide);
    setActivedots();
}, 5000);

//set slide cho phần shopee mall
const mallContainer = document.querySelector(".mall--dot"); // lấy container của mấy cái dot
const mallDotsingle = document.querySelectorAll(".mall--dot__single"); // lấy hết mấy cái dot
const mallimgContainer = document.querySelector(".set--slider-for-mall"); //cái hộp chạy slide của mall
const mallimgSingle = document.querySelectorAll(".mall--mid__img-single"); //lấy hết ảnh để set slide

const mallClient = mallimgSingle[0].clientWidth;
let currentDot = 0;

function initTwo() {
    mallimgSingle.forEach((imgMall, index) => {
        imgMall.style.left = index * 100 + "%";
    });
    mallimgSingle[0].classList.add("active");
    createMalldot();
}
initTwo();

//tạo dot cho các bức ảnh
function createMalldot() {
    for (let i = 0; i < mallimgSingle.length; i++) {
        const dotMall = document.createElement("div");
        dotMall.classList.add("mall--dot__single");
        mallContainer.appendChild(dotMall);
        dotMall.addEventListener("click", () => {
            gotoMallSlide(i);
        });
    }
    mallContainer.children[0].classList.add("active");
}

function gotoMallSlide(currentIndex) {
    mallimgContainer.style.transform =
        "translateX(-" + currentIndex * mallClient + "px)";
    currentDot = currentIndex;
    setActivedotMall();
}

function setActivedotMall() {
    let activeMall = document.querySelector(".mall--dot__single.active");
    activeMall.classList.remove("active");
    mallContainer.children[currentDot].classList.add("active");
}

setInterval(() => {
    currentDot++;
    if (currentDot > mallimgSingle.length - 1) {
        gotoMallSlide(0);
        currentDot = 0;
    }
    gotoMallSlide(currentDot);
    setActivedotMall();
}, 5000);