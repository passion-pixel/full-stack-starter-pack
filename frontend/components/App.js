import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div style={{height: '720px', display: 'flex'}}>
        <Hours />
        <div style={{width: '600px', height: '720px', backgroundColor: '#ececec'}}>
          yo {name}
        </div>
      </div>
    );
  }
};

const Hours = () => {

  const hours = new Array(13)
    .join().split(',')
    .map(function(item, index){ return ++index + 8;})
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      {hours.map(h => (
        <div key={h} style={{display: 'flex', flexDirection: 'column', paddingRight: '8px'}}>
          <span style={{fontSize: '1.1em', textAlign: 'right', alignSelf: 'flex-end',}}>
            <b>{h <= 12 ? `${h}:00` : `${h%12}:00`}</b>
            {h <= 12 ? ` am` : ` pm`}
          </span>
          <span style={{position:'absolute', marginTop: '30px', alignSelf: 'flex-end', textAlign: 'right', width: '35px'}}>{h === 21 ? null : h <= 12 ? `${h}:30` : `${h%12}:30`}</span>
        </div>
      ))}
    </div>
  );
};
          //<span>{h <= 12 ? `${h}:30am` : `${h%12}:30pm`}</span><br/>

export default App;
