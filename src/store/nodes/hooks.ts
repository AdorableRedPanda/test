import { useSelector, useDispatch } from "react-redux";

import { NodesActions } from "./actions";

import type { ID } from "@/types";
import { nodesSelector } from "@/store/nodes/seletors";

export const useGetNodes = () => {
	return useSelector(nodesSelector);
};

export const useNodeActions = (id: ID) => {
	const dispatch = useDispatch();

	return {
		delete: () => dispatch(NodesActions.delete({ id })),
	};
};
