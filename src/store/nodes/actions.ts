import { createAction } from "@reduxjs/toolkit";
import type { NodesStore, GraphNode, WithId, WithValue } from "@/types";

export const NodesActions = {
	delete: createAction<WithId>("NODES_DELETE"),
	update: createAction<WithId & WithValue<string>>("NODES_UPDATE"),
	init: createAction<NodesStore>("NODES_INIT_STORE"),
};
