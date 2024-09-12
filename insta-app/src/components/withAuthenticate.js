import React from "react";

const withAuthenticate = (Component, Redirect) =>
  class extends React.Component {
    render() {
      if (false) {
        return <Component />;
      } else {
        return <Redirect />;
      }
    }
  };

export default withAuthenticate;
