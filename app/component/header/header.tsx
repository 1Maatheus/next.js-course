import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";

import NavLink from "./nav-link";

const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={Logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
