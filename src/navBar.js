import { newPopup } from "../newPopup";

export const navBar = () => {
	const navBar = document.getElementById("nav-bar");

	const list = document.createElement("ul");

	const item1 = document.createElement("li");
	item1.textContent = "Home";
	item1.id = "home-view";
	item1.classList = "nav-link";
	// item1.addEventListener("click", displayHome);

	const item2 = document.createElement("li");
	item2.textContent = "To-Do";
	item2.id = "todo-view";
	item1.classList = "nav-link";
	// item1.addEventListener("click", displayTodo);

	const item3 = document.createElement("li");
	item3.textContent = "Projects";
	item3.id = "projects-view";
	item1.classList = "nav-link";
	// item1.addEventListener("click", displayProjects);

	const item4 = document.createElement("li");
	item4.textContent = "Notes";
	item4.id = "notes-view";
	item1.classList = "nav-link";
	// item1.addEventListener("click", displayNotes);

	const btnNewTodo = document.createElement("button");
	btnNewTodo.id = "btn-newTodo";
	btnNewTodo.textContent = "+";
	btnNewTodo.addEventListener("click", newPopup);

	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);
	list.appendChild(item4);

	navBar.appendChild(list);
	navBar.appendChild(btnNewTodo);
};
