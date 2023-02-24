import React, { FC } from 'react';

type UserInfoProps = {
  age: number;
  name: string;
  phoneNumber: string;
}

/**
 * @description Компонент UserInfo делает форматирование номера телефона
 * помимо отображения данных о пользователе.
 *
 * В идеале компонент ддолжен делать только одну задачу: отображать данные о пользователе.
 */
export const UserInfoProblem: FC<UserInfoProps> = (props) => {
  const { name, age, phoneNumber } = props;

  function formatPhoneNumber(phone: string): string {
    return phone.trim();
  }

  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{formatPhoneNumber(phoneNumber)}</div>
    </div>
  );
};
