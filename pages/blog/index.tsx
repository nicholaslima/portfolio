import { Header } from "../components/Header";
import styles from "./styles.module.scss";

export default function Blog() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className="title">blog</h1>
        <p className="description" id={styles.descriptionPosts}>
          Minha lista de postagens de assuntos diversos relacionados a
          programação
        </p>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar Post"
        />

        <ul className={styles.listPosts}>
          <li>
            <p className={styles.TypePost}>comunidade</p>
            <div className={styles.header}>
              <p className={styles.titlePost}>como fazer layout responsivo</p>
              <p className="date">12/02/2023</p>
            </div>
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className={styles.imagePost}
              alt="image about post"
            />
            <div className={styles.footer}>
              <p className={styles.description}>
                nest post irei discorrer como criar uma pagina
                responsiva,elementos como imagem e letras como causar uma boa
                impressão aos usuarios do seu site, e atingir publico que
                utiliza a internet pelo smatphone.
              </p>
            </div>
          </li>
          <li>
            <p className={styles.TypePost}>comunidade</p>
            <div className={styles.header}>
              <p className={styles.titlePost}>como fazer layout responsivo</p>
              <p className="date">12/02/2023</p>
            </div>
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className={styles.imagePost}
              alt="image about post"
            />
            <div className={styles.footer}>
              <p className={styles.description}>
                nest post irei discorrer como criar uma pagina
                responsiva,elementos como imagem e letras como causar uma boa
                impressão aos usuarios do seu site, e atingir publico que
                utiliza a internet pelo smatphone.
              </p>
            </div>
          </li>

          <li>
            <p className={styles.TypePost}>comunidade</p>
            <div className={styles.header}>
              <p className={styles.titlePost}>como fazer layout responsivo</p>
              <p className="date">12/02/2023</p>
            </div>
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className={styles.imagePost}
              alt="image about post"
            />
            <div className={styles.footer}>
              <p className={styles.description}>
                nest post irei discorrer como criar uma pagina
                responsiva,elementos como imagem e letras como causar uma boa
                impressão aos usuarios do seu site, e atingir publico que
                utiliza a internet pelo smatphone.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
