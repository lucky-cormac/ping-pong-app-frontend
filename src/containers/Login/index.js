import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { login } from 'containers/App/actions';
import AuthForm, { FORM_MODE } from 'components/AuthForm';

const Login = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.global.currentUser);
  const loginUser = useCallback(
    (payload) => dispatch(login(payload)),
    [dispatch],
  );

  return (
    <Box width={540} my={5} mx="auto">
      <AuthForm
        mode={FORM_MODE.LOGIN}
        user={currentUser}
        onSubmit={loginUser}
      />
    </Box>
  );
};

export default Login;
