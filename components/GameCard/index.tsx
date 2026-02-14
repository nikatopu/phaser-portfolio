import Link from "next/link";
import styles from "./GameCard.module.scss";

type Props = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default function GameCard({ slug, title, description, image }: Props) {
  return (
    <Link href={`/games/${slug}`} className={styles.link}>
      <article className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </article>
    </Link>
  );
}
