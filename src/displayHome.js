import { clearContent } from "./clearContent";
import { NotesManager } from "./NotesManager";
import { renderNotesItem } from "./renderNotesItem";
import { renderTodoItem } from "./renderTodoItem";
import { TodoManager } from "./TodoManager";

export const displayHome = () => {
	clearContent();

	TodoManager.todoArray.forEach((todo) => {
		renderTodoItem(todo);
	});

	NotesManager.notesArray.forEach((note) => {
		renderNotesItem(note);
	});
};
