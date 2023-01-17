import { Notes } from "./Notes";

export class NotesManager {
	static notesArray = [];

	static addNote() {
		let title = document.querySelector(".note-title").value;
		let info = document.querySelector(".note-info").value;

		const note = new Notes(title, info);

		NotesManager.notesArray.push(note);
		console.log(NotesManager.notesArray);

		window.localStorage.setItem("notesArray", JSON.stringify(NotesManager.notesArray));
	}

	static updateNotes() {
		const storage = JSON.parse(window.localStorage.getItem("notesArray"));

		if (storage === null) {
			NotesManager.notesArray = [];
		} else {
			NotesManager.notesArray = storage;
		}
	}
}
