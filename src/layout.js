export const layout = () => {
	const body = document.querySelector("body");

	// div to hold all elements
	const main = document.createElement("div");
	main.id = "main";

	// create header content is in other file
	const header = document.createElement("div");
	header.id = "header";

	// create nav-bar content is in other file
	const navBar = document.createElement("div");
	navBar.id = "nav-bar";

	// create main content div withoyut content
	const content = document.createElement("div");
	content.id = "content";

	// create footer content is in other file
	const footer = document.createElement("div");
	footer.id = "footer";

	main.appendChild(header);
	main.appendChild(navBar);
	main.appendChild(content);
	main.appendChild(footer);

	body.appendChild(main);
};
