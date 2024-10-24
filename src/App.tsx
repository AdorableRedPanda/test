import type * as React from "react";
import { StoreProvider } from "@/store";
import "./styles/reset.css";
import { AppContent } from "@/components/AppContent";
export const App: React.FC = () => (
	<StoreProvider>
		<AppContent />
	</StoreProvider>
);
