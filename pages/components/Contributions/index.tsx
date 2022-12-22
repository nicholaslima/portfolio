import { BsArrowRight } from "react-icons/bs";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineLink } from "react-icons/ai";
import styles from "./styles.module.scss";

export function Contributions() {
  return (
    <div className={styles.container}>
      <h1 className="title">ultimos projetos</h1>

      <p className="description">
        Lista de ultimos projetos criados pessoais e de clientes.
      </p>

      <ul>
        <li>
          <p>projeto criado</p>
          <div className={styles.links}>
            <DiGithubAlt size={20} />
            <AiOutlineLink size={20} />
          </div>
        </li>
        <li>
          <p>projeto criado</p>
          <div className={styles.links}>
            <DiGithubAlt size={20} />
            <AiOutlineLink size={20} />
          </div>
        </li>
        <li>
          <p>projeto criado</p>
          <div className={styles.links}>
            <DiGithubAlt size={20} />
            <AiOutlineLink size={20} />
          </div>
        </li>
        <li>
          <p>projeto criado</p>
          <div className={styles.links}>
            <DiGithubAlt size={20} />
            <AiOutlineLink size={20} />
          </div>
        </li>
      </ul>
      <div className={styles.btnSeeAllProjects}>
        veja todos <BsArrowRight size={20} />
      </div>
    </div>
  );
}
