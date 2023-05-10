import React from "react";

function Line({ obj, tableHaed }) {
  return (
    <>
      {tableHaed ? (
        <div className="top line">
          <div>этаж</div>
          <div>квартиры</div>
        </div>
      ) : (
        <></>
      )}

      {obj === undefined ? (
        <></>
      ) : (
        <div className="line">
          <div className="collumn1">{obj.floor}</div>
          <div className="collumn2">
            {isNaN(+obj.roomEnd) ? (
              <>{obj.roomStart + " – " + obj.roomEnd}</>
            ) : (
              <>
                <div>{obj.roomStart}</div>
                <div>{obj.roomEnd}</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Line;
