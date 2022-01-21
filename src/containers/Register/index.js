import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { register } from 'containers/App/actions';
import AuthForm, { FORM_MODE } from 'components/AuthForm';

const Register = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.global.currentUser);
  const registerUser = useCallback(
    (payload) => dispatch(register(payload)),
    [dispatch],
  );

  return (
    <Box width={540} my={5} mx="auto">
      <AuthForm
        mode={FORM_MODE.REGISTER}
        user={currentUser}
        onSubmit={registerUser}
      />
    </Box>
  );
};

export default Register;
