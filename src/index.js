import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter as Router, Route } from 'react-router-dom';

let Homepage = () => <h1>Homepage!</h1>

let TopLevel = () =>
    <Router>
        <div>
            <Route path="/" exact component={Homepage}/>
            <Route path="/users/:id" component={App}/>
        </div>
    </Router>

ReactDOM.render(<TopLevel />, document.getElementById('root'));