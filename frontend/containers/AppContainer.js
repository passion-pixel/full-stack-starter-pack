import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import StatelessCount from './StatelessCount.js';
import { Link } from 'react-router-dom';

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
        React State count: {this.state.count}
        <StatelessCount />
        <Link to="/">Home</Link>
        <button onClick={() => this.props.history.push('/devtools')}>
          DevTools
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.rootReducer.title
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
