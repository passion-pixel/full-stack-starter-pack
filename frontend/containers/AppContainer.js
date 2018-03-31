import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App'
import StatelessCount from './StatelessCount.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { bindState,
         bindActions,
         combine, } from '~/index.js'

@connect(combine(bindState('root')),
         bindActions({}))

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      userChores: [],
    }
  }
  componentDidMount = async () => {
    const resp = await axios.get(process.env.API_URL + '/users')
    this.setState({ userChores: resp.data.data })
    console.log(this.state)
  }
  handleInc = () => {
    this.setState({ count: ++this.state.count })
  }
  render() {
    return (
      <div>
        <App title={this.props.root.title} />
        <button onClick={this.handleInc}>+</button>
        React State count: {this.state.count}
        <StatelessCount />
        <Link to="/">Home</Link>
        <button onClick={() => this.props.history.push('/devtools')}>
          DevTools
        </button>
        <h1>Many to Many data queried from server on componentDidMount:</h1>
        <ul>
          {this.state.userChores.map(x => (
            <li key={x.id}>{x.user.name}, {x.chore.title}, {x.duration.toFixed(2)} minutes</li>
          ))}
        </ul>
      </div>
    )
  }
}
