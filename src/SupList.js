import React from 'react';
import Sup from './Sup';

let SupList = ({ sups }) =>
    <div>
        {
            sups.map(sup =>
                <Sup sup={sup} />
            )
        }
    </div>

export default SupList;