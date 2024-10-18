import { createReducer } from "@reduxjs/toolkit";
import type { NodesStore } from "@/types";
import { NodesActions } from "./actions";

export const nodesReducer = createReducer<NodesStore>([{"id":"bc888434-b887-47ae-98a8-d36bd762a71d","position":[0,0],"value":"0","version":"164ac242-59f3-4bc5-83c8-f8046eb08ec6"},{"id":"7e8ae472-560e-4a04-99b7-a6c163a3549e","position":[200,0],"value":"1","version":"504ca62e-f111-424b-a169-6f88bf06a0d7"}], (builder) => {
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
