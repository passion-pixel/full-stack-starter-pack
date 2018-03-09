import React from 'react';
import { connect } from 'react-redux';

const StatelessCount = ({ count, handleInc }) => {
  return (
    <div style={{ display: 'block' }}>
      <button onClick={handleInc}>+</button>
      Stateless count: {count}
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  handleInc: () => dispatch({ type: 'INC'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatelessCount);
