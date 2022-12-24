import styles from "./styles.module.scss";

export function Experiences() {
  return (
    <div className={styles.container}>
      <h1 className="title">Experiencias relevantes</h1>
      <p className="description" id={styles.descriptionContribution}>
        Veja Minhas ultimas contribuições para comunidade de programação, e
        minhas ultimas atividades relevantes.
      </p>

      <ul>
        <li>
          <p className={styles.date}>25/12/2022</p>
          <p className="subtitle">participação no projeto open source</p>
          <p className="description">
            participei de um projeto open source onde, criei a funcionlidade de
            x
          </p>
        </li>

        <li>
          <p className={styles.date}>25/12/2022</p>
          <p className="subtitle">prjeto hackathon xyz</p>
          <p className="description">
            participei de um hackathon xyz onde resolvemos problema x
          </p>
        </li>
      </ul>
    </div>
  );
}
