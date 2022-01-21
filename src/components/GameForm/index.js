import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Spinner from 'components/Spinner';
import { FORM_MODE, GAME_SCHEMA } from './constants';

export * from './constants';

const GameForm = ({ mode, title, game, players, onSubmit }) => {
  const { loading: submitting, data: gameData } = game;
  const { data: playersData } = players;
  const formInitialValues = {
    player1: '',
    player2: '',
    player1Score: 0,
    player2Score: 0,
    gameAt: new Date(),
    ...(mode === FORM_MODE.CREATE ? {} : gameData),
  };

  return (
    <Box>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Formik
            initialValues={formInitialValues}
            validationSchema={GAME_SCHEMA}
            onSubmit={(values) => {
              if (mode === FORM_MODE.CREATE) {
                onSubmit(values);
              } else {
                onSubmit({ _id: gameData._id, ...values });
              }
            }}
          >
            {() => (
              <Form>
                <Field name="player1">
                  {({ field }) => (
                    <Box mt={2} mb={1}>
                      <FormControl fullWidth>
                        <InputLabel id="player1-select-label">
                          Player1
                        </InputLabel>
                        <Select
                          labelId="player1-select-label"
                          id="player1-simple-select"
                          label="Player1"
                          {...field}
                        >
                          {(playersData || []).map((playerData) => (
                            <MenuItem
                              key={playerData._id}
                              value={playerData._id}
                            >
                              {`${playerData.firstName} ${playerData.lastName}`}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                </Field>
                <ErrorMessage name="player1" component="div" />
                <Field name="player2">
                  {({ field }) => (
                    <Box mt={2} mb={1}>
                      <FormControl fullWidth>
                        <InputLabel id="player2-select-label">
                          Player2
                        </InputLabel>
                        <Select
                          labelId="player2-select-label"
                          id="player2-simple-select"
                          label="Player2"
                          margin="dense"
                          {...field}
                        >
                          {(playersData || []).map((playerData) => (
                            <MenuItem
                              key={playerData._id}
                              value={playerData._id}
                            >
                              {`${playerData.firstName} ${playerData.lastName}`}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                </Field>
                <ErrorMessage name="player2" component="div" />
                <Field name="player1Score">
                  {({ field }) => (
                    <TextField
                      label="Player1 Score"
                      type="text"
                      fullWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="player1Score" component="div" />
                <Field name="player2Score">
                  {({ field }) => (
                    <TextField
                      label="Player2 Score"
                      type="text"
                      fullWidth
                      margin="normal"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="player2Score" component="div" />
                <Field name="gameAt">
                  {({ field }) => (
                    <Box mt={2} mb={1}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                          label="Game At"
                          renderInput={(props) => <TextField {...props} />}
                          {...field}
                        />
                      </LocalizationProvider>
                    </Box>
                  )}
                </Field>
                <ErrorMessage name="gameAt" component="div" />
                <Box my={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={submitting}
                  >
                    {submitting && <Spinner />}
                    {!submitting && <span>Save</span>}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

GameForm.propTypes = {
  mode: PropTypes.string.isRequired,
  title: PropTypes.string,
  game: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default GameForm;
