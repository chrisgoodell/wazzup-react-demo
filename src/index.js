import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import sort from 'lodash/sortBy';

import SupList from './SupList';

let Homepage = () => <h1>Homepage!</h1>
let About = () => <h1>About Me!</h1>
// let Profile = ({ match }) =>
//     <h1>Welcome to {match.params.username}'s profile!</h1>

let getPosts = (userId) =>
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
        .then(res => res.json())

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sups: [],
            sortBy: 'date'
        };
    }

    fetchData() {
        getPosts(this.props.match.params.username)
            .then(sups => this.setState({ sups }));
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        let prevUserId = prevProps.match.params.username;
        let currUserId = this.props.match.params.username;
        if (prevUserId !== currUserId) {
            this.setState({ sups: [] });
            this.fetchData();
        }
    }

    render() {
        let { sups, sortBy } = this.state;
        let sortedSups = sort(sups, sortBy);

        return (
            <div>
                <h1>Hi {this.props.match.params.username}</h1>
                <select
                    value={sortBy}
                    onChange={event => this.setState({ sortBy: event.target.value })}>
                    <option value="date">By Date</option>
                    <option value="user">By User</option>
                </select>
                { sortedSups.length === 0 ?
                    <p>Loading!</p>
                :
                    <SupList sups={sortedSups} />
                }
            </div>
        )
    }
}


let Navbar = () =>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/1">nybblr</Link>
        <Link to="/users/2">robby</Link>
    </div>

let Screen = () =>
    <Router>
        <div>
            <Navbar />
            <Route path="/" exact component={Homepage}/>
            <Route path="/about" component={About}/>
            <Route path="/users/:username" component={Profile}/>
        </div>
    </Router>

ReactDOM.render(<Screen />, document.getElementById('root'));