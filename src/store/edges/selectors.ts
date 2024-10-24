import type { AppStore } from "@/types";

export const edgesSelector = (state: AppStore) => state.edges || [];
