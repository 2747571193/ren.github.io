let images = document.querySelectorAll('#banner .img3');
let indicatorDiv = document.querySelectorAll('#banner .banner div');
let banner_index = 1;
let totalImages = images.length;
let timer;

function startAutoSlide() {
    timer = setInterval(() => {
        banner_index = (banner_index % totalImages) + 1;
        changeImage(banner_index);
    }, 4000);
}
function stopAutoSlide() {
    clearInterval(timer);
}
function changeImage(index) {
    stopAutoSlide();
    images.forEach(function (img) {
        img.classList.remove('active');
    });
    images[index - 1].classList.add('active');

    updateIndicators(index);
    startAutoSlide();
}
function updateIndicators(current) {
    indicatorDiv.forEach(function (div, i) {
        if (i + 1 === current) {
            div.classList.add("select");
        } else {
            div.classList.remove("select");
        }
        div.onclick = () => {
            banner_index = i + 1;
            changeImage(banner_index);
        };
    });
}

images[0].classList.add('active');
updateIndicators(banner_index);
startAutoSlide();


let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let imagesContainer = document.querySelectorAll('.img6');
let scrollAmount = 310;
let scrollArray = new Array(imagesContainer.length);
imagesContainer.forEach(function (img, i) {
    scrollArray[i] = scrollAmount * i;
})
let currentIndex = 0;

function scrollImage(flag, n) {
    n = parseInt(n);
    imagesContainer.forEach(function (img, i) {
        if (i === n) {
            if (flag === 'l') {
                img.style.left = -scrollAmount + "px";
                setTimeout(() => {
                    img.style.display = "none";
                    setTimeout(() => {
                        img.style.left = scrollArray[i] + "px";
                        img.style.display = "block";
                    }, 50);
                }, 100);
            } else if (flag === 'r') {
                img.style.transition = "none";
                img.style.left = -scrollAmount + "px";
                setTimeout(() => {
                    img.style.transition = "left .1s ease-in";
                    img.style.left = scrollArray[i] + "px";
                }, 5);
            }
        } else img.style.left = scrollArray[i] + "px";
    })
}

rightArrow.addEventListener('click', throttle(() => {
    let temp = scrollArray[0], n;
    for (n in scrollArray) if (scrollArray[n] === scrollAmount * (imagesContainer.length - 1)) break;

    for (let i = 0; i < scrollArray.length - 1; i++)
        scrollArray[i] = scrollArray[i + 1];
    scrollArray[scrollArray.length - 1] = temp;
    scrollImage('r', n);
}, 100));

leftArrow.addEventListener('click', throttle(() => {
    let temp = scrollArray[scrollArray.length - 1], n;
    for (n in scrollArray) if (scrollArray[n] === 0) break;

    for (let i = scrollArray.length - 1; i > 0; i--)
        scrollArray[i] = scrollArray[i - 1];
    scrollArray[0] = temp;
    scrollImage('l', n);
}, 200));

// 节流函数，用于限制触发间隔
function throttle(func, wait) {
    let timeout;
    return () => {
        if (!timeout)
            timeout = setTimeout(() => {
                func.apply(this, arguments);
                timeout = null;
            }, wait);
    };
}

scrollImage();