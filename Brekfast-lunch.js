let slideIndex = 1;
let dots = document.getElementsByClassName("demo");
let img_bottom = document.getElementsByClassName("img_bottom");

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let captionText = document.getElementById("caption");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < img_bottom.length; i++) {
		img_bottom[i].className = img_bottom[i].className.replace(" active", "");
	}
	// slides[slideIndex - 1].style.display = "block";
	slides[slideIndex - 1].setAttribute('style', 'display: flex; flex-direction: row; justify-content:space-evenly; align-items: stretch; background-color: #8EA257; color: #E4E1C7 ');
	img_bottom[slideIndex - 1].className += " active";
	img_bottom[0].onclick = function () { currentSlide(1) };
	img_bottom[1].onclick = function () { currentSlide(2) };
	img_bottom[2].onclick = function () { currentSlide(3) };
	// img_bottom[3].onclick = function () { currentSlide(4) };
	// img_bottom[4].onclick = function () { currentSlide(5) };
	// img_bottom[5].onclick = function () { currentSlide(6) };

	captionText.innerHTML = img_bottom[slideIndex - 1].alt;
}

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

document.getElementsByClassName("prev")[0].onclick = function () { plusSlides(-1) };
document.getElementsByClassName("next")[0].onclick = function () { plusSlides(1) };

// za default btn da se smene
let btnDes = document.getElementsByClassName("myBtn");
function btn_design() {
	// btnDes.className = btnDes.className.replace(" active_img", "");
	btnDes.setAttribute('style', 'background-color: #8EA257; color: #E4E1C7');
	btnDes.className += " active_img";
}

btnDes.onclick = function () { btn_design() };



// -------------Lunch sider
let slideIndexLunch = 1;

let img_bottomLunch = document.getElementsByClassName("img_bottomLunch");

function showSlidesLucnh(n) {
	let i;
	let slidesLunch = document.getElementsByClassName("mySlidesLunch");
	let captionTextL = document.getElementById("captionLunch");
	if (n > slidesLunch.length) { slideIndexLunch = 1 }
	if (n < 1) { slideIndexLunch = slidesLunch.length }
	for (i = 0; i < slidesLunch.length; i++) {
		slidesLunch[i].style.display = "none";
	}
	for (i = 0; i < img_bottomLunch.length; i++) {
		img_bottomLunch[i].className = img_bottomLunch[i].className.replace(" active", "");
	}
	// slides[slideIndex - 1].style.display = "block";
	slidesLunch[slideIndexLunch - 1].setAttribute('style', 'display: flex; flex-direction: row; justify-content:space-evenly; align-items: stretch; background-color: #8EA257; color: #E4E1C7 ');
	img_bottomLunch[slideIndexLunch - 1].className += " active";
	img_bottomLunch[0].onclick = function () { currentSlideL(1) };
	img_bottomLunch[1].onclick = function () { currentSlideL(2) };
	img_bottomLunch[2].onclick = function () { currentSlideL(3) };
	// img_bottom[3].onclick = function () { currentSlide(4) };
	// img_bottom[4].onclick = function () { currentSlide(5) };
	// img_bottom[5].onclick = function () { currentSlide(6) };

	captionTextL.innerHTML = img_bottomLunch[slideIndexLunch - 1].alt;
}

showSlidesLucnh(slideIndexLunch);

function plusSlidesL(n) {
	showSlidesLucnh(slideIndexLunch += n);
}

function currentSlideL(n) {
	showSlidesLucnh(slideIndexLunch = n);
}

document.getElementsByClassName("prevLunch")[0].onclick = function () { plusSlidesL(-1) };
document.getElementsByClassName("nextLunch")[0].onclick = function () { plusSlidesL(1) };


