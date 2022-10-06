// Scrool Animated
windows.scroll(
    {
        top: 0,
        behavior: 'smooth',
    }
)

// AOS-Style

AOS.init({
    duration: 1200,
  })

// Portfolio

console.clear();

var contentImg = document.getElementById("contentImg");
var imgList = document.querySelector(".menu-slider");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
//init
contentImg.style.backgroundImage =
	"url(" + imgList.children[0].childNodes[0].firstChild.src + ")";
console.log(imgList.children[0].childNodes.length);
imgList.children[0].childNodes[0].classList.add("active");

var pageIndex = 0;
function removeActive() {
	for (var i = 0; i < imgList.children[0].childNodes.length; i++) {
		imgList.children[0].childNodes[i].classList.remove("active");
	}
}
function leftFunc() {
	removeActive();
	pageIndex = pageIndex - 1;
	if (pageIndex < 0) {
		pageIndex = imgList.children[0].childNodes.length - 1;
	}
	contentImg.style.backgroundImage =
		"url(" + imgList.children[0].childNodes[pageIndex].firstChild.src + ")";
	imgList.children[0].childNodes[pageIndex].classList.add("active");
	console.log(pageIndex);
}
function rightFunc() {
	removeActive();
	pageIndex = pageIndex + 1;
	if (pageIndex >= imgList.children[0].childNodes.length) {
		pageIndex = 0;
	}
	// console.log(imgList.children[0].childNodes[pageIndex])
	contentImg.style.backgroundImage =
		"url(" + imgList.children[0].childNodes[pageIndex].firstChild.src + ")";
	imgList.children[0].childNodes[pageIndex].classList.add("active");
	console.log(pageIndex);
}
function getImgContent(e) {
	removeActive();
	pageIndex = Number(e.target.parentNode.dataset.index);
	console.log(pageIndex);
	if (e.target.nodeName === "IMG") {
		e.target.parentNode.classList.add("active");
		contentImg.style.backgroundImage = "url(" + e.target.src + ")";
	} else {
		return;
	}
}
imgList.addEventListener("click", getImgContent, false);
leftArrow.addEventListener("click", leftFunc, false);
rightArrow.addEventListener("click", rightFunc, false);


