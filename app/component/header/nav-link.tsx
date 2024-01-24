"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ href, children, className }: Props) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
