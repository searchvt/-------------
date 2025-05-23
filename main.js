
// MODAL OPENING FOR BREAKFAST
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
console.log(span)
btn.onclick = function () {
	modal.style.display = "flex";
	modal.style.flexDirection = "row";
	modal.style.flexWrap = "wrap";
	modal.style.justifyContent = "center";
	modal.style.minWidth = "80vw";
	modal.style.minHeight = "90vh";

}
span.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// CHECKING IF SOMETHING IS HIDEN
function myFunction() {
	var x = document.getElementById("close");
	if (window.getComputedStyle(x).display === "none") {
		x.style.display = "block";
	}
}


// REMOVE TOGGLE OF CLASSLIST IN BENEFITS AND NUTRIENTS PART
const exerciseBtn = document.querySelectorAll('.toggle_remove_btn');
const exercise = document.querySelectorAll('.btn_toggle');

exerciseBtn && exerciseBtn.forEach((el) => {
	el.addEventListener('click', (e) => {
		let currentExercise = e.target;
		if (currentExercise.innerText == "BENEFITS") {
			document.getElementById('benefits').classList.toggle("js_benefits_container");
		}
		else { document.getElementById('benefits').classList.remove("js_benefits_container"); }
		if (currentExercise.innerText == "NUTRIENTS") {
			document.getElementById('nutrients').classList.toggle("js_table_container");
		}
		else { document.getElementById('nutrients').classList.remove("js_table_container"); }

	})
})

// ZOOM FOR FOOD FACTS PART
var btn_img = document.getElementsByClassName("click");
for (let n = 0; n < btn_img.length; n++) {
	btn_img[n].onclick = function () {
		const imgId = btn_img[n].getAttribute("data-modal");
		const img = document.getElementById(imgId);
		if (img) {
			img.style.opacity = 0.9;
			img.style.width = " 30vw";
			img.style.justifySelf = "center";
			img.style.zIndex = "10";
		}

	};
}


// MODAL OPENING FOR LUNCH
var modalLunch = document.getElementById("myModalLunch");
var btnLunch = document.getElementById("myBtnLunch");
var spanLunch = document.getElementsByClassName("closeL")[0];
console.log(spanLunch)
btnLunch.onclick = function () {
	modalLunch.style.display = "flex";
	modalLunch.style.flexDirection = "row";
	modalLunch.style.flexWrap = "wrap";
	modalLunch.style.justifyContent = "center";
	modalLunch.style.minWidth = "80vw";
	modalLunch.style.minHeight = "90vh";

}
spanLunch.onclick = function () {
	modalLunch.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modalLunch) {
		modalLunch.style.display = "none";
	}
}




// END OF JS FILE
// ----------------------------------------------
