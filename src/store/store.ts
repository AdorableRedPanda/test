import { configureStore } from "@reduxjs/toolkit";
import { nodesReducer } from "./nodes";
import { edgesReducer } from "./edges";
import { contentReducer } from "./content";

export const store = configureStore({
	reducer: {
		nodes: nodesReducer,
		edges: edgesReducer,
		content: contentReducer,
	},
});
