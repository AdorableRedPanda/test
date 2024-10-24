export type ID = string;

export interface WithId {
	id: ID;
}

export interface WithIds {
	ids: ID[];
}

export type Relation<TType> = [TType, TType];

export interface GNode<TValue = string> extends WithId {
	content: ID[];
}

export interface Edge extends WithId {
	relation: Relation<ID>;
}

export interface NodeContent extends WithId {
	parent: ID;
}

export type NodesStore = GNode[];
export type ContentStore = NodeContent[];
export type EdgesStore = Edge[];

export interface AppStore {
	nodes: NodesStore;
	content: ContentStore;
	edges: EdgesStore;
}
