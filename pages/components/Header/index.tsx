import Link from "next/link";
import styles from "./styles.module.scss";
import { BsMoonFill, BsAlarmFill } from "react-icons/bs";
import { useState } from "react";

export function Header() {
  const [openNavBar, setOpenNavBar] = useState(false);

  function handleOpenNavBar() {
    const toggleValue = !openNavBar;
    setOpenNavBar(toggleValue);
  }

  return (
    <>
      <div className={`${styles.container} ${openNavBar ? styles.on : ""}`}>
        <div onClick={handleOpenNavBar} className={styles.menuToggle}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>

        <nav className={styles.navbar}>
          <Link href="/">blog</Link>
          <Link href="/">sobre min</Link>
          <Link href="/">blog</Link>
          <Link href="/">projetos</Link>
        </nav>
      </div>
    </>
  );
}
