import { createAction } from "@reduxjs/toolkit";
import type { WithIds } from "@/types";

export const ContentActions = {
	delete: createAction<WithIds>("CONTENT_DELETE"),
};
