import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <h1>Stateful {this.props.name}</h1>
//     );
//   }
// };
// export default App;

const App = (props) => {
  return (
    <h1>Stateless {props.name}</h1>
  );
};

export default App;
