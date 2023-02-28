import React from 'react';
import { Navbar } from 'components/Navbar';
import { Logo } from 'components/Logo';
import { CitySelector } from 'components/CitySelector';
import { useGetCitiesQuery } from 'services/catalog/catalog';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { citySelector, selectCity } from 'state/slices/city';
import s from './header.module.scss';

export const Header = () => {
  const { isLoading, error, data = [] } = useGetCitiesQuery();
  const dispatch = useAppDispatch();
  const cityState = useTypedSelector(citySelector);
  const handleSelect = (key: number) => {
    dispatch(selectCity(key));
  };

  return (
    <header className={s.header}>
      <Logo />
      <Navbar>
        <Navbar.Link href="/user/12222">Account</Navbar.Link>
        <Navbar.Link href="/aboutUs">About us</Navbar.Link>
        <Navbar.Link href="/news">News</Navbar.Link>
        <Navbar.Link href="/contacts">Contacts</Navbar.Link>
        <Navbar.Link href="/blog">The blog</Navbar.Link>
      </Navbar>
      <CitySelector cities={data} value={cityState} onSelect={handleSelect} />
    </header>
  );
};
