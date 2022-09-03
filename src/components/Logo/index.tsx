import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "img/logo.png";
import s from "./logo.module.scss";

export const Logo = () => {
  return (
    <Link href="">
      <a className={s.logo}>
        <Image src={LogoImg} alt="logo" />
      </a>
    </Link>
  );
};
