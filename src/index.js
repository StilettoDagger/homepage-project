import "./css/styles.css";
import portraitImg from "../assets/images/professional-portrait.jpg";

document.addEventListener("DOMContentLoaded", () => {
	const imgElement = document.getElementById("portrait-img");
	if (imgElement) {
		imgElement.src = portraitImg;
	}
});
