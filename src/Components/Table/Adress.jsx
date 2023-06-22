import React from 'react';
import { useSelector } from 'react-redux';

import { settingsSelector } from '../../store/selectors';

function Adress({adress}) {

    const {adressSize} = useSelector(settingsSelector);

    return (
        <div style={{fontSize: adressSize}} className='base adress'>
            {adress}
        </div>
    );
}

export default Adress;