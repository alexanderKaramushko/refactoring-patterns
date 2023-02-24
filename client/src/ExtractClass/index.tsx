/**
 * @description приём рефакторинга, при котором из большого класса
 * с множеством слабо-связанных по смыслу полей и методов,
 * выделяется один или несколько классов.
 *
 * Позволяет соблюсти SRP.
 */

import React, { FC } from 'react';
import { UserInfoSolution } from './solution';

/**
 * @description Выделили форматирование номера телефона в отдельный компонент
 */
function PhoneNumber({ phoneNumber }: { phoneNumber: string }) {
  function formatPhoneNumber(phone: string): string {
    return phone.trim();
  }

  return (
    <div>{formatPhoneNumber(phoneNumber)}</div>
  );
}

export default (() => (
  <UserInfoSolution
    name="Alex"
    age={27}
    renderPhoneNumber={() => <PhoneNumber phoneNumber="89277834526" />}
  />
)) as FC;
