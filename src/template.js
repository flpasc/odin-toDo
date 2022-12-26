export const template = () => {
	const body = document.querySelector("body");

	const header = document.createElement("div");
	header.id = "header";
	header.textContent = "huhu";

	const navBar = document.createElement("div");
	navBar.id = "nav-bar";

	const content = document.createElement("div");
	content.id = "content";

	body.appendChild(header);
	body.appendChild(navBar);
	body.appendChild(content);
};
