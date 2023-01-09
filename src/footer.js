export const footer = () => {
	const footer = document.getElementById("footer");

	const list = document.createElement("ul");
	const item1 = document.createElement("li");
	item1.textContent = "Made by Flpasch";

	const item2 = document.createElement("li");
	item2.textContent = "following the Odin-Project";

	const item3 = document.createElement("li");
	item3.textContent = "© 2023";

	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);

	footer.appendChild(list);
};
