import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import StatelessCount from './StatelessCount.js';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleInc = () => {
    this.setState({ count: ++this.state.count });
  }
  render() {
    return (
      <div>
        <App title={this.props.title} />
        <button onClick={this.handleInc}>+</button>
        Stateful count: {this.state.count}
        <StatelessCount />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.title
});

const mapDispatchToProps = (/* dispatch */) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
