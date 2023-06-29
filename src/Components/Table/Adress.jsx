import React from 'react';
import { useSelector } from 'react-redux';

import { entrancesSelector, settingsSelector } from '../../store/selectors';

function Adress() {
    const color = "white"

    const {adressSize} = useSelector(settingsSelector);
    const {adress} = useSelector(entrancesSelector);

    return (
        <div style={{fontSize: adressSize}} className={'base adress '+{color}}>
            {adress.toUpperCase()}
        </div>
    );
}

export default Adress;