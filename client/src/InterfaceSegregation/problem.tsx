import React, { FC } from 'react';

/**
 * @description Поначалу интерфейс фильтра может иметь только два поля: name и value
 */
type Filter = {
  name: string;
  value: string;

  /**
   * @description Однако, далее к фильтру добавляется валидация
   */
  isValid: boolean;
}

type FilterProps = {
  filter: Filter;
}

const Filter: FC<FilterProps> = (props) => {
  const { filter } = props;
  const { name, value, isValid } = filter;

  /**
   * @description Фильтр просто отображает нужные элементы,
   * но теперь приходится учитывать и валидацию
   */
  if (!isValid) {
    return <>Validation error</>;
  }

  return (
    <input type="text" name={name} value={value} />
  );
};
