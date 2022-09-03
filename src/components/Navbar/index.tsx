import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <Link href="/user/12222">Личный кабинет</Link>
      <Link href="/aboutUs">О нас</Link>
      <Link href="/news">Новости и акции</Link>
      <Link href="/contacts">Контакты</Link>
      <Link href="/blog">Блог</Link>
    </div>
  );
};
