export const newNote = () => {
	const content = document.getElementById("popup-input");
	content.innerHTML = "";

	const title = document.createElement("textarea");
	title.classList = "new-title";
	title.placeholder = "Title: Gear for bikepacking";

	const info = document.createElement("textarea");
	info.classList = "new-info";
	info.placeholder = "Details: e.g buy a small toothbrush";

	const newNoteBtn = document.createElement("button");
	newNoteBtn.id = "add-note-btn";
	newNoteBtn.textContent = "CREATE NOTE";

	content.appendChild(title);
	content.appendChild(info);
	content.appendChild(newNoteBtn);
};
