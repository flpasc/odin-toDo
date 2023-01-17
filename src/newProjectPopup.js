import { clearPopup } from "./clearPopup";
import { ProjectManager } from "./ProjectManager";
import { toggleNewPopupOff } from "./toggleNewPopupOff";

export const newProject = () => {
	const content = document.getElementById("popup-input");
	content.innerHTML = "";

	const title = document.createElement("textarea");
	title.classList = "project-title";
	title.placeholder = "Title: Do Something";

	const newProjectBtn = document.createElement("button");
	newProjectBtn.id = "add-project";
	newProjectBtn.textContent = "CREATE PROJECT";

	newProjectBtn.addEventListener("click", () => {
		ProjectManager.addProject();
		clearPopup();
		toggleNewPopupOff();
	});

	content.appendChild(title);
	content.appendChild(newProjectBtn);
};
