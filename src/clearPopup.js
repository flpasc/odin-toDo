export const clearPopup = () => {
	let title = document.querySelector(".new-title");
	let info = document.querySelector(".new-info");

	title.value = "";
	info.value = "";
};
