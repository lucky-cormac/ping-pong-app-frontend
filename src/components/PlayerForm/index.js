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
import { FORM_MODE, PLAYER_SCHEMA } from './constants';

export * from './constants';

const PlayerForm = ({ mode, title, player, onSubmit }) => {
  const { loading: submitting, data } = player;
  const formInitialValues = {
    firstName: '',
    lastName: '',
    age: 0,
    ...(mode === FORM_MODE.CREATE ? {} : data),
  };

  return (
    <Box>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Formik
            initialValues={formInitialValues}
            validationSchema={PLAYER_SCHEMA}
            onSubmit={(values) => {
              if (mode === FORM_MODE.CREATE) {
                onSubmit(values);
              } else {
                onSubmit({ _id: data._id, ...values });
              }
            }}
          >
            {() => (
              <Form>
                <Field name="firstName">
                  {({ field }) => (
                    <TextField
                      label="First Name"
                      type="text"
                      fullWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="firstName" component="div" />
                <Field name="lastName">
                  {({ field }) => (
                    <TextField
                      label="Last Name"
                      type="text"
                      fullWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="lastName" component="div" />
                <Field name="age">
                  {({ field }) => (
                    <TextField
                      label="Age"
                      type="text"
                      fullWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="age" component="div" />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={submitting}
                >
                  {submitting && <Spinner />}
                  {!submitting && <span>Save</span>}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

PlayerForm.propTypes = {
  mode: PropTypes.string.isRequired,
  title: PropTypes.string,
  player: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PlayerForm;
