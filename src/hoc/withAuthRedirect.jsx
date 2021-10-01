import { Redirect } from "react-router"
import React from "react";
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to="/login" />
      }

      return <Component {...this.props} />
    }
  }

  let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });

  let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectAuthRedirectComponent;
}
