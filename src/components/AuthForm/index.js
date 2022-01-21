import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Spinner from 'components/Spinner';
import { FORM_TITLE_MAP, AUTH_SCHEMA } from './constants';

export * from './constants';

const renderFormContent = ({
  mode,
  formInitialValues,
  onSubmit,
  submitting,
}) => {
  const formSchema = AUTH_SCHEMA;
  const submitLabel = mode;

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={formSchema}
      onSubmit={(values) => {
        const { email, password } = values;
        onSubmit({ email, password });
      }}
    >
      {() => (
        <Form>
          <Field name="email">
            {({ field }) => (
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          </Field>
          <ErrorMessage name="email" component="div" />
          <Field name="password">
            {({ field }) => (
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          </Field>
          <ErrorMessage name="password" component="div" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={submitting}
          >
            {submitting && <Spinner />}
            {!submitting && <span>{submitLabel}</span>}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const AuthForm = ({ mode, user, onSubmit }) => {
  const { loading: submitting } = user;
  const formInitialValues = { email: '', password: '' };

  return (
    <Box>
      <Card>
        <CardHeader title={FORM_TITLE_MAP[mode]} />
        <CardContent>
          {renderFormContent({
            mode,
            formInitialValues,
            onSubmit,
            submitting,
          })}
        </CardContent>
      </Card>
    </Box>
  );
};

AuthForm.propTypes = {
  mode: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
