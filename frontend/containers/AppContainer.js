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

const mapStateToProps = (state) => ({
  title: state.title
});

const mapDispatchToProps = (/* dispatch */) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
