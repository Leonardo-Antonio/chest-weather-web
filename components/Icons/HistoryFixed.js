import Link from "next/link";
import styles from "../../styles/History.module.css"

export const HistoryFixed = () => {
  return (
    <div className={styles.float}>
      <div>
        <strong>
            <Link href="/my-history">
                <a>see my history</a>
            </Link>
        </strong>
      </div>
    </div>
  );
};
