import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/editor" className={styles.link_btn}>
        Go to editor
      </Link>
    </div>
  );
}
