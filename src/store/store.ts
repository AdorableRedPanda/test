import { configureStore } from "@reduxjs/toolkit";
import { nodesReducer } from "./nodes";

export const store = configureStore({
	reducer: {
		nodes: nodesReducer,
	},
});
