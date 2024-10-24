import type React from "react";
import { useEdgeActions, useGetEdges } from "@/store";
import type { Edge } from "@/types";

import css from "./css.module.css";
interface Props {
	edge: Edge;
}

const EdgeItem: React.FC<Props> = ({ edge: { id, relation } }) => {
	const [from, to] = relation;
	const { delete: deleteEdge } = useEdgeActions(id);
	const text = `delete ${from}=>${to}`;
	return (
		<button type="button" onClick={deleteEdge}>
			{text}
		</button>
	);
};

export const Edges: React.FC = () => {
	const edges = useGetEdges();

	return (
		<div className={css.data_container}>
			<span className={css.data_label}>Edges</span>
			{edges.map((e) => (
				<EdgeItem edge={e} key={e.id} />
			))}
		</div>
	);
};
