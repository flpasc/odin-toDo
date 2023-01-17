export const clearPopup = () => {
	let titleTodo = document.querySelector(".new-title");
	let info = document.querySelector(".new-info");
	let titleProject = document.querySelector(".project-title");
	let noteTitle = document.querySelector(".note-title");
	let noteInfo = document.querySelector(".note-info");

	if (titleTodo != null) {
		titleTodo.value = "";
	}
	if (info != null) {
		info.value = "";
	}
	if (titleProject != null) {
		titleProject.value = "";
	}
	if (noteTitle != null) {
		noteTitle.value = "";
	}
	if (noteInfo != null) {
		noteInfo.value = "";
	}
};
