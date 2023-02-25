/**
 * @description приём рефакторинга, при котором из большого интерфейса
 * выделяются небольшие атомарные интерфейсы, которые могут быть скомбинированы.
 *
 * Позволяет избежать пустой реализации и ненужных выбросов ошибок.
 */

import React, { FC } from 'react';
import { Filter, ValidatedFilter } from './solution';

export default (() => (
  <ValidatedFilter isValid>
    <Filter filter={{ name: 'name', value: 'value' }} />
  </ValidatedFilter>
)) as FC;
