import type { AppStore, WithId } from "@/types";

export const nodesSelector = (state: AppStore) => state.nodes;
export const nodeSelector =
	({ id }: WithId) =>
	(state: AppStore) =>
		state.nodes.find((n) => n.id === id);
