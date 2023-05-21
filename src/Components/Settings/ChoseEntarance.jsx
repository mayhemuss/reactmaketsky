import React from 'react';
import MyRadio from '../Table/MyRadio';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEntarance } from '../../store/reducers/settingSlice';

function ChoseEntarance() {
  const dispatch = useDispatch();
  const currentEntaranceHandler = (e) => {
    dispatch(setCurrentEntarance(e.target.value));
  };
  const currentEntarance = useSelector(
    (state) => state.settings.currentEntarance
  );
  const allEntrances = useSelector((state) => state.entrances.allEntrances);

  return (
    <>
      <div>...................</div>
      Выбор парадной:
      {allEntrances.map((elem) => {
        return (
          <MyRadio
            callBack={currentEntaranceHandler}
            current={currentEntarance}
            val={elem}
            key={elem}
          >
            парадная № <strong>{elem}</strong>
          </MyRadio>
        );
      })}
    </>
  );
}

export default ChoseEntarance;