import { createReducer } from "@reduxjs/toolkit";
import type { ContentStore } from "@/types";
import { ContentActions } from "./actions";

const initial: ContentStore = [
	{ id: "n1-c1", parent: "n1" },
	{ id: "n1-c2", parent: "n1" },
	{ id: "n1-c3", parent: "n1" },
	{ id: "n2-c1", parent: "n2" },
	{ id: "n2-c2", parent: "n2" },
	{ id: "n2-c3", parent: "n2" },
	{ id: "n3-c1", parent: "n3" },
	{ id: "n3-c2", parent: "n3" },
	{ id: "n3-c3", parent: "n3" },
];
export const contentReducer = createReducer<ContentStore>(
	initial,
	(builder) => {
		builder.addCase(ContentActions.delete, (state, { payload: { ids } }) => {
			const deleteSet = new Set(ids);
			return state.filter(({ id }) => !deleteSet.has(id));
		});
	},
);
