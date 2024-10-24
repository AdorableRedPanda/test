import { createReducer } from "@reduxjs/toolkit";
import type { EdgesStore } from "@/types";
import { EdgeActions } from "./actions";

const initial: EdgesStore = [
	{ id: "e1", relation: ["n1", "n2"] },
	{ id: "e2", relation: ["n2", "n3"] },
	{ id: "e3", relation: ["n1", "n3"] },
];
export const edgesReducer = createReducer<EdgesStore>(initial, (builder) => {
	builder.addCase(EdgeActions.delete, (state, { payload: { id } }) =>
		state.filter((n) => n.id !== id),
	);
});
