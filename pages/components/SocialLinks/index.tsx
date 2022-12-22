import styles from "./styles.module.scss";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className={styles.container}>
      <FaInstagram size={30} />
      <FaLinkedinIn size={30} />
      <FaGithub size={30} />
    </div>
  );
}
