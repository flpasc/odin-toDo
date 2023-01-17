import { Project } from "./Project";

export class ProjectManager {
	static projectsArray = [];

	static addProject() {
		let title = document.querySelector(".project-title").value;

		const project = new Project(title);

		ProjectManager.projectsArray.push(project);
		console.log(ProjectManager.projectsArray);

		window.localStorage.setItem("projectArray", JSON.stringify(ProjectManager.projectsArray));
	}
}
