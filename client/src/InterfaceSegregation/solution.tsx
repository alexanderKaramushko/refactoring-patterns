import React, { FC, PropsWithChildren } from 'react';

type ValidationError = {
  /**
   * @description Валидация описывается в отдельном интерфейсе
   */
  isValid: boolean;
}

/**
 * @description Фильтр описывается в отдельном интерфейсе
 */
type Filter = {
  name: string;
  value: string;
}

type FilterProps = {
  filter: Filter;
}

export const Filter: FC<FilterProps> = (props) => {
  const { filter } = props;
  const { name, value } = filter;

  return (
    <input type="text" name={name} value={value} />
  );
};

export const ValidatedFilter: FC<PropsWithChildren<ValidationError>> = (props) => {
  const { children, isValid } = props;

  /**
   * @description Теперь каждый компонент использует свой интерфейс
   */
  if (!isValid) {
    return <>Validation error</>;
  }

  return (
    <>
      {children}
    </>
  );
};
