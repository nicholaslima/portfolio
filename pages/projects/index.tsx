import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { Header } from "../components/Header";
import styles from "./styles.module.scss";
import { FaReact } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className="title">Projetos</h1>
        <p className="description" id={styles.descriptionProjects}>
          Lista de projetos pessoais e de clientes
        </p>

        <div className={styles.Projects}>
          <div className={styles.itemProject}>
            <img src="imgs/projeto.png" alt="image of project" />
            <h3 className={styles.nameProject}>ignews</h3>
            <div className={styles.main}>
              <p id={styles.descProject}>
                Este projeto foi criado com tecnologia Reactjs, nextjs, foi
                feito para resolver o problema de calculo syz.
              </p>
              <div className={styles.tecnologiesList}>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <p className="date">22/05/2022</p>
              <div className={styles.links}>
                <BsGithub />
                <AiOutlineLink />
              </div>
            </div>
          </div>

          <div className={styles.itemProject}>
            <img src="imgs/projeto.png" alt="image of project" />
            <h3 className={styles.nameProject}>ignews</h3>
            <div className={styles.main}>
              <p id={styles.descProject}>
                Este projeto foi criado com tecnologia Reactjs, nextjs, foi
                feito para resolver o problema de calculo syz.
              </p>
              <div className={styles.tecnologiesList}>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <p className="date">22/05/2022</p>
              <div className={styles.links}>
                <BsGithub />
                <AiOutlineLink />
              </div>
            </div>
          </div>
          <div className={styles.itemProject}>
            <img src="imgs/projeto.png" alt="image of project" />
            <h3 className={styles.nameProject}>ignews</h3>
            <div className={styles.main}>
              <p id={styles.descProject}>
                Este projeto foi criado com tecnologia Reactjs, nextjs, foi
                feito para resolver o problema de calculo syz.
              </p>
              <div className={styles.tecnologiesList}>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <p className="date">22/05/2022</p>
              <div className={styles.links}>
                <BsGithub />
                <AiOutlineLink />
              </div>
            </div>
          </div>
          <div className={styles.itemProject}>
            <img src="imgs/projeto.png" alt="image of project" />
            <h3 className={styles.nameProject}>ignews</h3>
            <div className={styles.main}>
              <p id={styles.descProject}>
                Este projeto foi criado com tecnologia Reactjs, nextjs, foi
                feito para resolver o problema de calculo syz.
              </p>
              <div className={styles.tecnologiesList}>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.itemTecnologie}>
                  <FaReact />
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              <p className="date">22/05/2022</p>
              <div className={styles.links}>
                <BsGithub />
                <AiOutlineLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
