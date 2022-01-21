import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES from './routes-config';

const getControlledRoute = ({
  mode,
  component: Component,
  shouldLoad,
  redirectTo,
  ...rest // exact, path
}) => {
  let routeElement = null;
  if (shouldLoad) {
    const componentProps = {
      ...(mode ? { mode } : {}),
    };
    routeElement = <Component {...componentProps} />;
  } else {
    routeElement = <Navigate replace to={redirectTo} />;
  }
  return <Route key={rest.path} {...rest} element={routeElement} />;
};

const RoutesWrapper = ({ isAuthenticated }) => (
  <Routes>
    {ROUTES.map(
      ({
        controlled,
        shouldNotBeAuthenticated,
        shouldBeAuthenticated,
        component,
        ...rest
      }) => {
        if (controlled) {
          return getControlledRoute({
            component,
            shouldLoad:
              (shouldNotBeAuthenticated && !isAuthenticated) ||
              (shouldBeAuthenticated && isAuthenticated),
            ...rest,
          });
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
  </Routes>
);

RoutesWrapper.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default RoutesWrapper;
