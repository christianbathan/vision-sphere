import styles from "./Features.module.scss";
import Image from "next/image";

interface FeaturesProps {
	countryId: string;
}

export default function Features({ countryId }: FeaturesProps) {
	return (
		<div className={styles.features}>
			<div className={styles.cards}>{/* ...existing card code... */}</div>
		</div>
	);
}
