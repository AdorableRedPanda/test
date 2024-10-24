import { createAction } from "@reduxjs/toolkit";
import type { WithId } from "@/types";

export const EdgeActions = {
	delete: createAction<WithId>("EDGES_DELETE"),
	deleteBy: createAction<WithId>("EDGES_DELETE_BY"),
};
