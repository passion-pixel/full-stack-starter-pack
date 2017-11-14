import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <div style={{paddingTop: '5px', height: '720px', display: 'flex'}}>
        <Hours />
        <div style={{width: '600px', height: '720px', padding: '0 10px', backgroundColor: '#ececec'}}>
          <Events />
        </div>
      </div>
    );
  }
};

const Events = () => {

  const events = [
    {start: 30, end: 150},
    {start: 540, end: 600},
    {start: 560, end: 620},
    {start: 610, end: 670}
  ];

// position: 'absolute', top: `${e.start}px`, 
  function recurse(events) {

    const e = events[0]; // current event
    if (!e) return; // if no current event exists, exit

    const e1 = events[1]; // next event
      if (e1) { // if one more event exists
      if (e.end < e1.start) { // if the next event overlaps with the current event, they are row siblings
        return (
          <div style={{display: 'flex'}}>
            <div style={{height: `${e.end-e.start}px`, border: '1px solid black', }}>
              Sample Title
              Sample Location
            </div>
            {recurse(events.slice(1))}
          </div>
        );
      } else {
        return (
          <div style={{display: 'flex'}}>
            {recurse(events.slice(1))}
          </div>
        );
      }
    } else {
      recurse(events.slice(1));
    }

  }

  console.log(recurse(events));

  return (
    <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>

      {recurse(events)}

      {/*events.map((e, idx) => {
        return (
          <div style={{position: 'absolute', top: `${e.start}px`, height: `${e.end-e.start}px`, border: '1px solid black', }} key={idx}>
            Sample Item
            Sample Location
          </div>
        );
      })*/}

    </div>
  );

};

const Hours = () => {

  const hours = new Array(13)
    .join().split(',')
    .map(function(item, index){ return ++index + 8;});

  const styles = {
    hoursContainer: {marginTop: '-10px'},
    hourContainer: {display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingRight: '8px', height: '60px'},
    hour: {fontSize: '1.1em', textAlign: 'right', alignSelf: 'flex-end', height: '30px'},
    halfHour: {alignSelf: 'flex-end', textAlign: 'right', width: '35px', height: '30px'},
  };

  return (
    <div style={styles.hoursContainer}>
      {hours.map(h => (
        <div key={h} style={styles.hourContainer}>
          <span style={styles.hour}>
            <b>{h <= 12 ? `${h}:00` : `${h%12}:00`}</b>{h <= 12 ? ` am` : ` pm`}
          </span>
          <span style={styles.halfHour}>
            {h === 21 ? null : h <= 12 ? `${h}:30` : `${h%12}:30`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default App;
