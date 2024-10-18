import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { NodesActions } from "./actions";

import nodes from "../../../data/nodes.json";
import type { ID, NodesStore } from "@/types";

export const useInitNodes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		setInterval(() => dispatch(NodesActions.init(nodes)), 1000);
	}, [dispatch]);
};

export const useGetNodes = () => {
	const selected = useSelector((state) => state.nodes);

	return useMemo(() => selected, [])
}

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
