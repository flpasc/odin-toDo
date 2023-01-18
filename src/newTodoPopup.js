import { clearPopup } from "./clearPopup";
import { ProjectManager } from "./ProjectManager";
import { renderContent } from "./renderContent";
import { PrioManager } from "./setPrio";
import { TodoManager } from "./TodoManager";
import { toggleNewPopupOff } from "./toggleNewPopupOff";

export const newTodo = () => {
	const content = document.getElementById("popup-input");
	content.innerHTML = "";

	const title = document.createElement("textarea");
	title.classList = "new-title";
	title.placeholder = "Title: Empty trash";

	const info = document.createElement("textarea");
	info.classList = "new-info";
	info.placeholder = "Details: e.g bathroom, kitchen, desk";

	const date = document.createElement("input");
	date.classList = "new-date";
	date.type = "date";

	// prioritie buttons
	const priorities = document.createElement("div");
	priorities.id = "priorities";

	const lowPrio = document.createElement("button");
	lowPrio.textContent = "LOW";
	lowPrio.id = "low-prioritie";
	lowPrio.classList = "prio-btn";
	lowPrio.addEventListener("click", PrioManager.setPrio);

	const mediumPrio = document.createElement("button");
	mediumPrio.textContent = "MEDIUM";
	mediumPrio.id = "med-prioritie";
	mediumPrio.classList = "prio-btn";
	mediumPrio.addEventListener("click", PrioManager.setPrio);

	const highPrio = document.createElement("button");
	highPrio.textContent = "HIGH";
	highPrio.id = "high-prioritie";
	highPrio.classList = "prio-btn";
	highPrio.addEventListener("click", PrioManager.setPrio);

	priorities.appendChild(lowPrio);
	priorities.appendChild(mediumPrio);
	priorities.appendChild(highPrio);

	// create add button and project selector and the div
	const dropdown = document.createElement("select");
	dropdown.id = "todo-dropdown";

	ProjectManager.projectsArray.forEach((project) => {
		const option = document.createElement("option");
		option.textContent = project.title;
		option.value = project.title;

		dropdown.appendChild(option);
	});

	const addButtonArea = document.createElement("div");
	addButtonArea.id = "add-btn-area";
	const addBtn = document.createElement("button");
	addBtn.id = "btn-add";
	addBtn.textContent = "ADD";
	addBtn.addEventListener("click", () => {
		TodoManager.addTodo();
		renderContent();
		clearPopup();
		toggleNewPopupOff();
	});

	addButtonArea.appendChild(dropdown);
	addButtonArea.appendChild(addBtn);
	content.appendChild(title);
	content.appendChild(info);
	content.appendChild(date);
	content.appendChild(priorities);

	content.appendChild(addButtonArea);
};
