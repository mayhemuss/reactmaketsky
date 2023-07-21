import React from 'react';
import { useSelector } from 'react-redux';
import { entrancesSelector, settingsSelector } from '../../store/selectors';

function ShortEnterance() {

const {entrance} = useSelector(entrancesSelector)
const {currentEntarance}= useSelector(settingsSelector)
const start = entrance[currentEntarance].short.start
const end = entrance[currentEntarance].short.end
  return (
    <div>
      КВ. {start} – {end}
    </div>
  );
}

export default ShortEnterance;