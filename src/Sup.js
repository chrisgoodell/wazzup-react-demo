import React from 'react';
import moment from 'moment';

let Sup = ({ sup }) =>
    <div>
        <h2>{sup.body}</h2>
        <p>{sup.author} | {moment(sup.time).fromNow()}</p>
    </div>

export default Sup;