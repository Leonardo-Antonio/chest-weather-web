import styles from "../../styles/ErrorModal.module.css"

export const ErrorModal = ({ isErr, arrErr }) => {
  if (!isErr) return <></>;

  return (
    <div className={styles.modal}>
      <ul>
        {arrErr.map((err, index) => (
          <li className={styles.list} key={index}>{err}</li>
        ))}
      </ul>
    </div>
  );
};
