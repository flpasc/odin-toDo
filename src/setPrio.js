export class PrioManager {
	static lastClickedPrio = "";

	static setPrio() {
		const low = document.getElementById("low-prioritie");
		const medium = document.getElementById("med-prioritie");
		const high = document.getElementById("high-prioritie");

		if (document.activeElement === low) {
			PrioManager.lastClickedPrio = "low";
		}
		if (document.activeElement === medium) {
			PrioManager.lastClickedPrio = "medium";
		}
		if (document.activeElement === high) {
			PrioManager.lastClickedPrio = "high";
		}
	}
}
