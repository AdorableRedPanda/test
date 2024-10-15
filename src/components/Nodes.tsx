import type React from "react";
import {useEffect, useLayoutEffect} from "react";
import { Node } from "@/components/Node";
import {useGetNodes, useInitNodes} from "@/store";
import styles from "@/components/styles.module.css";

export const Nodes: React.FC = () => {
	useInitNodes();
	const nodes = useGetNodes();

	return (
		<div className={styles.container}>
			{nodes.map((n) => (
				<Node node={n} key={n.id}/>
			))}
		</div>
	);
};
