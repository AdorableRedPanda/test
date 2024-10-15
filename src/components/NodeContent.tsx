import type { GraphNode } from "@/types";
import type React from "react";
import styles from "./styles.module.css";
import { Circles } from "@/components/Circles";
import {useEffect, useState} from "react";
interface Props {
	value: GraphNode["value"];
}


export const NodeContent: React.FC<Props> = ({ value }) => (
	<div className={styles["node-content"]}>
		<Circles/>
		{value}
	</div>
)
