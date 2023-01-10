import { newTodo } from "./newTodo";
import { newProject } from "./newProject";
import { newNote } from "./newNote";

export const newPopup = () => {
	const body = document.querySelector("body");
	const popup = document.createElement("div");
	popup.id = "new-popup";

	// heading for popup
	const heading = document.createElement("div");
	heading.id = "popup-heading";
	heading.textContent = "Create new...";

	// nav-bar for the popup
	const nav = document.createElement("div");
	nav.id = "popup-nav";

	const list = document.createElement("ul");

	const item1 = document.createElement("li");
	item1.textContent = "Todo";
	item1.addEventListener("click", newTodo);

	const item2 = document.createElement("li");
	item2.textContent = "Project";
	item2.addEventListener("click", newProject);

	const item3 = document.createElement("li");
	item3.textContent = "Notes";
	item3.addEventListener("click", newNote);

	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);

	const inputs = document.createElement("div");
	inputs.id = "popup-input";

	// append to popup
	nav.appendChild(list);
	popup.appendChild(heading);
	popup.appendChild(nav);
	popup.appendChild(inputs);
	body.appendChild(popup);
};
