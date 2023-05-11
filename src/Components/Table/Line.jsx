import React from "react";

function Line({ thisFloor, haveTableHead }) {
  return (
    <>
      {haveTableHead ? (
        <div className="top line">
          <div>этаж</div>
          <div>квартиры</div>
        </div>
      ) : (
        <></>
      )}

      {thisFloor === undefined ? (
        <></>
      ) : (
        <div className="line">
          <div className="collumn1">{thisFloor.floor}</div>
          <div className="collumn2">
            {isNaN(+thisFloor.roomEnd) ? (
              <>{thisFloor.roomStart + " – " + thisFloor.roomEnd}</>
            ) : (
              <>
                <div>{thisFloor.roomStart}</div>
                <div>{thisFloor.roomEnd}</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Line;
