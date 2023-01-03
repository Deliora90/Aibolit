import React from 'react';
import cs from 'classnames';
import { ImLocation } from 'react-icons/im';
import { Dropdown } from 'components/Dropdown';
import { IOption } from 'types/common/IOption';
import s from './citySelector.module.scss';

type CitySelectorProps = {
  cities: IOption<number, string>[];
  value?: number;
  onSelect?: (key: number, value: string) => void;
};

export const CitySelector = ({
  cities,
  value,
  onSelect,
}: CitySelectorProps) => {

  return (
    <div className={cs(s.citySelector, s.citiSelectorContainer)}>
      <ImLocation className={s.citiSelectorIcon} />
      <Dropdown
        value={value}
        options={cities}
        onClick={onSelect}
        headerClassName={s.headerSelector}
      />
    </div>
  );
};
