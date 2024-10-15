import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { NodesActions } from "./actions";

import nodes from "../../../data/nodes.json";
import type { ID, NodesStore } from "@/types";

export const useInitNodes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(NodesActions.init(nodes));
	}, [dispatch]);
};

export const useGetNodes = () => useSelector((state) => state.nodes);

export const useNodeActions = (id: ID) => {
	const dispatch = useDispatch();

	return useMemo(
		() => ({
			delete: () => dispatch(NodesActions.delete({ id })),
			update: () =>
				dispatch(
					NodesActions.update({
						id,
						value: Math.random().toString(10).slice(0, 5),
					}),
				),
		}),
		[dispatch, id],
	);
};
