import { createAction } from "@reduxjs/toolkit";
import type { WithId, ID } from "@/types";

interface DeleteContentPayload extends WithId {
	content: ID;
}

export const NodesActions = {
	delete: createAction<WithId>("NODES_DELETE"),
	deleteContent: createAction<DeleteContentPayload>("NODES_DELETE_CONTENT"),
};
