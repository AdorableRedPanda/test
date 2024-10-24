import { useSelector, useDispatch } from "react-redux";
import { EdgeActions } from "./actions";

import type { ID } from "@/types";
import { edgesSelector } from "@/store/edges/selectors";

export const useGetEdges = () => {
	return useSelector(edgesSelector);
};

export const useEdgeActions = (id: ID) => {
	const dispatch = useDispatch();

	return {
		delete: () => dispatch(EdgeActions.delete({ id })),
	};
};
