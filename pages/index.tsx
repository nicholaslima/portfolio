import { Header } from "./components/Header";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.apresentation}>
          <h1 className={styles.name}>nicholas lima</h1>
          <p className={styles.role}>
            front end developer -<span> freelancer</span>
          </p>
          <p className={styles.myDescription}>
            Helping developers build a faster web. Teaching about web
            development, serverless, and React / Next.js.
          </p>
        </div>

        <img src="http://github.com/nicholaslima.png" alt="minha foto" />
      </div>
    </>
  );
}
