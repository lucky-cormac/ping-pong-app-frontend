import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

const ControlledRoute = ({
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
  return <Route {...rest} element={routeElement} />;
};

ControlledRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  mode: PropTypes.string,
  component: PropTypes.func.isRequired,
  shouldLoad: PropTypes.bool,
  redirectTo: PropTypes.string,
};

export default ControlledRoute;
