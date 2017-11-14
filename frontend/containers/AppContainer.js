import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';

const AppContainer = ({ name }) => {
  return (
    <div>
      <Title name={name} />
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
