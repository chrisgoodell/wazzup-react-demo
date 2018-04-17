import React, { Component } from 'react';
import SupList from './SupList';

const sups = [
  { author: 'nybblr', body: 'Just got pulled over', time: new Date() },
  { author: 'robby', body: 'Podcasting on Stay-at-Home Robby', time: new Date() },
  { author: 'james', body: 'Eating a bagel', time: new Date() },
]

const nybblrSups = [sups[0]];
const robbySups = [sups[1]];

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentUrl: '/'
    // };
  }

  // componentDidMount() {
  //   window.addEventListener('hashchange', (event) => {
  //     let url = event.newURL.split('#')[1];
  //     this.setState({ currentUrl: url });
  //   });
  // }

  render() {
    // let { currentUrl } = this.state;
    let userId = this.props.match.params.id;
    return (
      <div>
        { userId === 'nybblr' ?
          <div>
            <a href="#/users/robby">Robby's Sups</a>
            <SupList sups={nybblrSups} />
          </div>
        :
          <div style={{color:'red'}}>
            <a href="#/users/nybblr">nybblr's Sups</a>
            <SupList sups={robbySups} />
          </div>
        }
      </div>
    );
  }
}

export default App;
