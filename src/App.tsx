import type * as React from "react";
import { StoreProvider } from "@/store";
import "./styles/reset.css";
import {Nodes} from "@/components/Nodes";
export const App: React.FC = () => (
	<StoreProvider>
		<Nodes />
	</StoreProvider>
);
