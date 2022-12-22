import styles from "./styles.module.scss";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className={styles.container}>
      <FaWhatsapp size={30} />
      <FaInstagram size={30} />
      <FaLinkedinIn size={30} />
      <FaGithub size={30} />
    </div>
  );
}
