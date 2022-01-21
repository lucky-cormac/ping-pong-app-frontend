import * as Yup from 'yup';

export const FORM_MODE = {
  CREATE: 'create',
  EDIT: 'edit',
};

const playerShape = {
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  age: Yup.number().required('Required'),
};

export const PLAYER_SCHEMA = Yup.object().shape(playerShape);
