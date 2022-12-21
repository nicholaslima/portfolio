import Link from "next/link";
import styles from "./styles.module.scss";
import { BsMoonFill, BsAlarmFill } from "react-icons/bs";

export function Header() {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link href="/">blog</Link>
          <Link href="/">sobre min</Link>
          <Link href="/">blog</Link>
          <Link href="/">projetos</Link>
        </nav>
      </div>
      <div className={styles.gradient} />
    </>
  );
}
