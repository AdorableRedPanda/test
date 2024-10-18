import type { GraphNode } from "@/types";
import styles from "./styles.module.css";
import type React from "react";
import { useNodeActions } from "@/store";
import { NodeContent } from "@/components/NodeContent";
import {useEffect, useState} from "react";

interface Props {
	node: GraphNode;
}

export const Node: React.FC<Props> = ({
	node: { position, value, id: key },
}) => {

	const [state, setState] = useState(false)
	const { update, delete: deleteNode } = useNodeActions(key);


	useEffect(() => {
		console.log('node render')
	});


	const [x, y] = position;
	const transform = `translate(${x}px, ${y}px)`;

	if (state) {
		return null;
	}

	return (
		<div className={styles.node} style={{ transform }}>
			<NodeContent value={value} />
			<div className={styles.buttons}>
				<button type="button" onClick={update}>
					update
				</button>
				<button type="button" onClick={deleteNode}>
					delete
				</button>
			</div>
		</div>
	);
};

