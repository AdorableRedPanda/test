import { createReducer } from "@reduxjs/toolkit";
import type { NodesStore } from "@/types";
import { NodesActions } from "./actions";

const initial: NodesStore = [
	{ id: "n1", content: ["n1-c1", "n1-c2", "n1-c3"] },
	{ id: "n2", content: ["n3-c1", "n3-c2", "n3-c3"] },
	{ id: "n3", content: ["n4-c1", "n4-c2", "n4-c3"] },
];

export const nodesReducer = createReducer<NodesStore>(initial, (builder) => {
	builder
		.addCase(NodesActions.delete, (state, { payload: { id } }) =>
			state.filter((n) => n.id !== id),
		)
		.addCase(NodesActions.deleteContent, (state, { payload }) =>
			state.map((n) => {
				if (n.id !== payload.id) {
					return n;
				}
				return {
					...n,
					content: n.content.filter((c) => c !== payload.content),
				};
			}),
		);
});
