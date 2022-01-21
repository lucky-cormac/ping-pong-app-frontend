import PropTypes from 'prop-types';
import { Routes as RRRoutes, Route, Navigate } from 'react-router-dom';
import ControlledRoute from './ControlledRoute';
import ROUTES from './routes-config';

const Routes = ({ isAuthenticated }) => (
  <RRRoutes>
    {ROUTES.map(
      ({
        controlled,
        shouldNotBeAuthenticated,
        shouldBeAuthenticated,
        component,
        ...rest
      }) => {
        if (controlled) {
          return (
            <ControlledRoute
              key={rest.path}
              shouldLoad={
                (shouldNotBeAuthenticated && !isAuthenticated) ||
                (shouldBeAuthenticated && isAuthenticated)
              }
              component={component}
              {...rest}
            />
          );
        }

        if (rest.redirectTo) {
          return (
            <Route
              key={rest.path}
              {...rest}
              element={<Navigate replace to={rest.redirectTo} />}
            />
          );
        }

        const Component = component;
        return <Route key="not-found" {...rest} element={<Component />} />;
      },
    )}
  </RRRoutes>
);

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Routes;
