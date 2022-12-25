import Link from "next/link";
import styles from "./styles.module.scss";
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
          <Link href="/">sobre min</Link>
          <Link href="/blog">blog</Link>
          <Link href="/projects">projetos</Link>
        </nav>
      </div>
    </>
  );
}
