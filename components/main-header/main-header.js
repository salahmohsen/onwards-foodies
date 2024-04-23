import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";
import logoimg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBG from "./main-header-bg";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBG />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoimg} alt="A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
