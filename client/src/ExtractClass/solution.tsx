import React, { FC, ReactNode } from 'react';

type UserInfoProps = {
  age: number;
  name: string;
  renderPhoneNumber: () => ReactNode;
}

/**
 * @description Компонент UserInfo теперь делегирует задачу форматирования
 * и рендеринга номера телефона на другой компонент.
 */
export const UserInfoSolution: FC<UserInfoProps> = (props) => {
  const { name, age, renderPhoneNumber } = props;

  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{renderPhoneNumber()}</div>
    </div>
  );
};
