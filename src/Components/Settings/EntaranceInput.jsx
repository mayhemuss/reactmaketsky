import React from 'react';
import { useDispatch } from 'react-redux';
import MyInput from './MyInput';
import { setAdress ,setAllEntarence, setEntarance} from '../../store/reducers/entrancesSlice';
import { setCurrentEntarance } from '../../store/reducers/settingSlice';

function EntaranceInput() {

  const dispatch = useDispatch();

  const changeInput = ({ target: { value } }) => {
    try {
      const parse = JSON.parse(value);
      dispatch(setAdress(parse.adress));
      dispatch(setEntarance(parse.entrance));
      dispatch(setAllEntarence(Object.keys(parse.entrance)));
      dispatch(setCurrentEntarance(Object.keys(parse.entrance)[0]));
    } catch (error) {
      alert(error);
    }
  };



  return (
    <>
      Введи данные из экселя:
      <MyInput callBack={changeInput} place={"данные из exel"} />
      <div>...................</div>
    </>
  );
}

export default EntaranceInput;