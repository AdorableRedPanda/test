import type React from "react";
import css from "./css.module.css";
import { useContentActions, useGetContent } from "@/store";
import type { NodeContent } from "@/types";

interface Props {
	item: NodeContent;
}

const ContentItem: React.FC<Props> = ({ item: { id, parent } }) => {
	const { delete: deleteContent } = useContentActions(id);

	return (
		<div className={css.content_item}>
			<button type="button" onClick={deleteContent}>
				delete <br />
				{id} in {parent}
			</button>
		</div>
	);
};

export const Content: React.FC = () => {
	const content = useGetContent();

	return (
		<div className={css.data_container}>
			<span className={css.data_label}>Content</span>
			{content.map((c) => (
				<ContentItem item={c} key={c.id} />
			))}
		</div>
	);
};
