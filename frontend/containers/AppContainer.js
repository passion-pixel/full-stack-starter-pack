import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const AppContainer = ({ name }) => {
  return (
    <div>
      <App name={name} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
