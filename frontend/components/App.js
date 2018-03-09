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
  console.log(props);
  return (
    <h1>Stateless {props.title}</h1>
  );
};

export default App;
