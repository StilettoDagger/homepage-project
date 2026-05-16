import "./css/styles.css";
import portraitImg from "../assets/images/professional-portrait.jpg";
import contactImg from "../assets/images/contact.jpg";
import battleshipImg from "../assets/images/battleship.png";
import calculatorImg from "../assets/images/calculator.png";
import etchASketchImg from "../assets/images/etch-a-sketch.png";
import libraryImg from "../assets/images/library.png";
import restaurantPageImg from "../assets/images/restaurant-page.png";
import todolistImg from "../assets/images/todolist.png";

document.addEventListener("DOMContentLoaded", () => {
	const imgElement = document.getElementById("portrait-img");
	const contactImgElement = document.getElementById("contact-img");

	if (imgElement) {
		imgElement.src = portraitImg;
		contactImgElement.src = contactImg;
	}

	const imgMap = {
		"img-battleship": battleshipImg,
		"img-calculator": calculatorImg,
		"img-etch-a-sketch": etchASketchImg,
		"img-library": libraryImg,
		"img-restaurant-page": restaurantPageImg,
		"img-todolist": todolistImg,
	};

	for (const [id, src] of Object.entries(imgMap)) {
		const el = document.getElementById(id);
		if (el) el.src = src;
	}
});
