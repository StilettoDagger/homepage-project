import "./css/styles.css";
import portraitImg from "../assets/images/professional-portrait.jpg";
import contactImg from "../assets/images/contact.jpg";

document.addEventListener("DOMContentLoaded", () => {
	const imgElement = document.getElementById("portrait-img");
	const contactImgElement = document.getElementById("contact-img");
	if (imgElement) {
		imgElement.src = portraitImg;
		contactImgElement.src = contactImg;
	}
});
