import * as Yup from 'yup';

export const FORM_MODE = {
  CREATE: 'create',
  EDIT: 'edit',
};

const gameShape = {
  player1: Yup.string().required('Required'),
  player2: Yup.string().required('Required'),
  player1Score: Yup.number().required('Required'),
  player2Score: Yup.number().required('Required'),
  gameAt: Yup.date().required('Required'),
};

export const GAME_SCHEMA = Yup.object().shape(gameShape);
