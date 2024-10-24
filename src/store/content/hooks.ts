import { useDispatch, useSelector } from "react-redux";
import { ContentActions } from "./actions";

import type { ID } from "@/types";
import { contentsSelector } from "./selectors";

export const useGetContent = () => {
	return useSelector(contentsSelector);
};

export const useContentActions = (id: ID) => {
	const dispatch = useDispatch();

	return {
		delete: () => dispatch(ContentActions.delete({ ids: [id] })),
	};
};
