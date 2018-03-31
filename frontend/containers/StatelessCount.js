import React from 'react'
import { connect } from 'react-redux'
import { bindState,
         bindActions,
         combine, } from '~/index.js'
import { increment } from '~/actions/index.js'

@connect(combine(bindState('root')),
         bindActions({ increment }))

export default class StatelessCount extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.actions.increment}>+</button>
        Redux Stateless count: {this.props.root.count}
      </div>
    )
  }
}
