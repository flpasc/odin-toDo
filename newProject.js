export const newProject = () => {
	const content = document.getElementById("popup-input");
	content.innerHTML = "";

	const title = document.createElement("textarea");
	title.classList = "new-title";
	title.placeholder = "Title: Do Something";

	const newProjectBtn = document.createElement("button");
	newProjectBtn.id = "add-project";
	newProjectBtn.textContent = "CREATE PROJECT";

	content.appendChild(title);
	content.appendChild(newProjectBtn);
};
