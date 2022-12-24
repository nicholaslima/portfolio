import styles from "./styles.module.scss";

export function Blog() {
  return (
    <>
      <h1 className="title">blog</h1>
      <input type="text" />

      <div>
        <div className={styles.itemPost}></div>
      </div>
    </>
  );
}
