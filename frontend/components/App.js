import React from 'react';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <h1>Impure, stateful {this.props.name}</h1>
//     );
//   }
// };

export default function App(props) {
  return (
    <h1>Pure, stateless {props.name}</h1>
  );
};
