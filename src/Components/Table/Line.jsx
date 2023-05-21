import React from "react";

function Line({ thisFloor, haveTableHead }) {
  return (
    <>
      {haveTableHead && (
        <div className="base top line">
          <div className="base collumn collumn1">этаж</div>
          <div className="base collumn collumn2">квартиры</div>
        </div>
      )}

      {thisFloor === undefined ? (
        null
      ) : (
        <div className="base line">
          <div className="base collumn1 collumn">{thisFloor.floor}</div>
          <div className="base collumn2 collumn">
            {isNaN(thisFloor.roomEnd) ? (
              <>{thisFloor.roomStart + " – " + thisFloor.roomEnd}</>
            ) : (
              <>
                <div className="left">{thisFloor.roomStart}</div>
                <div className="center">–</div>
                <div className="right">{thisFloor.roomEnd}</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Line;
