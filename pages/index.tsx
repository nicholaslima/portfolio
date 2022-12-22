import { Contributions } from "./components/Contributions";
import { Header } from "./components/Header";
import { SocialLinks } from "./components/SocialLinks";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <SocialLinks />
      <div className={styles.container}>
        <div className={styles.containerDesc}>
          <div className={styles.apresentation}>
            <h1 className={styles.name}>nicholas lima</h1>
            <p className={styles.role}>
              front end developer -<span> freelancer</span>
            </p>
            <p className="description" id={styles.myDescription}>
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
            <button className={styles.btnCurriculo}>currículo</button>
          </div>

          <img src="http://github.com/nicholaslima.png" alt="minha foto" />
        </div>

        <Contributions />
      </div>
    </>
  );
}
