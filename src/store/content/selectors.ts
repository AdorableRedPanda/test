import type { AppStore, WithId } from "@/types";

export const contentsSelector = (state: AppStore) => state.content;
export const contentSelector =
	({ id }: WithId) =>
	(state: AppStore) =>
		state.content.find((n) => n.id === id);
