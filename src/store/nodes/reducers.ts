import { createReducer } from "@reduxjs/toolkit";
import type { NodesStore } from "@/types";
import { NodesActions } from "./actions";

export const nodesReducer = createReducer<NodesStore>([], (builder) => {
	builder
		.addCase(NodesActions.update, (state, { payload }) =>
			state.map((n) => {
				if (n.id !== payload.id) {
					return n;
				}

				return { ...n, ...payload };
			}),
		)
		.addCase(NodesActions.delete, (state, { payload: { id } }) =>
			state.filter((n) => n.id !== id),
		)
		.addCase(NodesActions.init, (_, { payload }) => payload);
});
