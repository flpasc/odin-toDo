import { displayHome } from "./displayHome";
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
	static removeNote(note) {
		const index = NotesManager.notesArray.findIndex((item) => item.title === note.title);

		NotesManager.notesArray.splice(index, 1);
		window.localStorage.setItem("notesArray", JSON.stringify(NotesManager.notesArray));
		displayHome();
	}
}
