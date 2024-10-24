import type React from "react";

import { Nodes } from "./Nodes";
import { Edges } from "./Edges";
import { Content } from "./Content";

import css from "./css.module.css";
export const AppContent: React.FC = () => {
	return (
		<div className={css.app_container}>
			<Nodes />
			<Edges />
			<Content />
		</div>
	);
};
