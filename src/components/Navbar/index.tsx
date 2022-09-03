import React from "react";
import Link from "next/link";
import s from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__body}>
        <li className={s.menu__item}>
          <Link href="/user/12222" className={s.menu__link}>
            Личный кабинет
          </Link>
        </li>
        <li className={s.menu__item}>
          <Link href="/aboutUs" className={s.menu__link}>
            О нас
          </Link>
        </li>
        <li className={s.menu__item}>
          <Link href="/news" className={s.menu__link}>
            Новости и акции
          </Link>
        </li>
        <li className={s.menu__item}>
          <Link href="/contacts" className={s.menu__link}>
            Контакты
          </Link>
        </li>
        <li className={s.menu__item}>
          <Link href="/blog" className={s.menu__link}>
            Блог
          </Link>
        </li>
      </ul>
    </nav>
  );
};
