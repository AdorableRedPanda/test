import type React from "react";
import { useGetNodes, useNodeActions } from "@/store";
import type { GNode } from "@/types";
import css from "./css.module.css";

interface Props {
	node: GNode;
}

const Node: React.FC<Props> = ({ node: { id, content } }) => {
	const { delete: deleteNode } = useNodeActions(id);

	return (
		<div className={css.node}>
			<div className={css.node_content}>
				<span>{id}</span>
				<button type="button" onClick={deleteNode}>
					delete
				</button>
			</div>
			<div className={css.children}>
				{content.map((c) => (
					<span className={css.child} key={c}>
						{c}
					</span>
				))}
			</div>
		</div>
	);
};

export const Nodes: React.FC = () => {
	const nodes = useGetNodes();

	return (
		<div className={css.data_container}>
			<span className={css.data_label}>Nodes</span>
			{nodes.map((n) => (
				<Node node={n} key={n.id} />
			))}
		</div>
	);
};
