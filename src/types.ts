export type ID = string;

export interface WithId {
	id: ID;
}

export interface WithValue<TData> {
	value: TData;
}

export type Relation<TType> = [TType, TType];

export interface GraphNode<TValue = string> extends WithId, WithValue<TValue> {
	version: ID;
	position: Relation<number>;
}

export interface Edge<TValue = string> extends WithId {
	value: TValue;
	relation: Relation<ID>;
}

export type NodesStore = GraphNode[];
export type EdgesStore = Record<ID, Edge>;
