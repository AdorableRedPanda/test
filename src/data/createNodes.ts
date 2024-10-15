import type { GraphNode, NodesStore } from "@/types";
import { writeFile } from "./utils";

console.log("build nodes");

const createId = () => crypto.randomUUID();

const HorizontalStep = 200;
const VerticalStep = 200;
const MaxCols = 5;
const createNode = (index: number): GraphNode => {
	const id = createId();
	const version = createId();

	const x = (index % MaxCols) * HorizontalStep;
	const y = Math.floor(index / MaxCols) * VerticalStep;

	return { id, position: [x, y], value: index.toString(10), version };
};

async function createNodes(count: number) {
	const store: NodesStore = [];

	console.time("createNodes");

	for (let i = 0; i < count; i++) {
		store.push(createNode(i));
	}

	const dir = "./data";
	await writeFile(`${dir}/nodes.json`, store);

	console.timeEnd("createNodes");
}

createNodes(4000);
