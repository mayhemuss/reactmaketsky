import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStreetNameSize,
  setStreetTypeSize,
  setBuildingNumberSize,
  setBuildingNumberIndent,
  setStreetTypeGap,
} from "../../store/reducers/settingSlice";
import { settingsSelector } from "../../store/selectors";

function AdressSizeSettings() {
  const dispatch = useDispatch();
  const {
    streetNameSize,
    streetTypeSize,
    buildingNumberSize,
    buildingNumberIndent,
    streetTypeGap,
  } = useSelector(settingsSelector);

  const [streetNameSizeState, setStreetNameSizeState] =
    useState(streetNameSize);
  const [streetTypeSizeState, setStreetTypeSizeState] =
    useState(streetTypeSize);
  const [buildingNumberSizeState, setBuildingNumberSizeState] =
    useState(buildingNumberSize);
  const [buildingNumberIndentState, setBuildingNumberIndentState] =
    useState(buildingNumberIndent);
  const [streetTypeGapState, setStreetTypeGapState] = useState(streetTypeGap);

  function streetNameSizeHandler(event) {
    setStreetNameSizeState(event.target.value);
  }
  function streetTypeSizeHandler(event) {
    setStreetTypeSizeState(event.target.value);
  }
  function setBuildingNumberSizeHandler(event) {
    setBuildingNumberSizeState(event.target.value);
  }
  function setBuildingNumberIndentHandler(event) {
    setBuildingNumberIndentState(event.target.value);
  }
  function setStreetTypeGapHandler(event) {
    setStreetTypeGapState(event.target.value);
  }

  function submitHendler(event) {
    event.preventDefault();
    dispatch(setStreetNameSize(Number(streetNameSizeState)));
    dispatch(setStreetTypeSize(Number(streetTypeSizeState)));
    dispatch(setBuildingNumberSize(Number(buildingNumberSizeState)));
    dispatch(setBuildingNumberIndent(Number(buildingNumberIndentState)));
    dispatch(setStreetTypeGap(Number(streetTypeGapState)));
  }

  return (
    <>
      <form
        onSubmit={submitHendler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        размер названия улицы:
        <input
          placeholder="шрифт адреса"
          type="number"
          value={streetNameSizeState}
          onChange={streetNameSizeHandler}
        />
        размер типа улицы:
        <input
          placeholder="шрифт адреса"
          type="number"
          value={streetTypeSizeState}
          onChange={streetTypeSizeHandler}
        />
        размер номера дома:
        <input
          placeholder="шрифт номера дома"
          type="number"
          value={buildingNumberSizeState}
          onChange={setBuildingNumberSizeHandler}
        />
        отступ в номере дома:
        <input
          placeholder="отступ в номере дома"
          type="text"
          value={buildingNumberIndentState}
          onChange={setBuildingNumberIndentHandler}
        />
        пробелы в типе дома
        <input
          placeholder="пробелы в типе дома"
          type="number"
          value={streetTypeGapState}
          onChange={setStreetTypeGapHandler}
        />
        <button type="submit">ввести</button>
      </form>
    </>
  );
}

export default AdressSizeSettings;
