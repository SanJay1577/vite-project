/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";

const State = () => {
  const [change, setChange] = useState(0);
  const [show, setShow] = useState(true);
  const mulipleTwo = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return change * 2;
  }, [change]);
  const handleChange = () => {
    setChange((prev) => prev + 1);
  };

  const handleChangeDEC = () => {
    setChange((prev) => prev - 1);
  };
  return (
    <div className="grid grid-cols-3">
      <button className="btn btn-warning" onClick={handleChange}>
        INC
      </button>
      {show ? change : "no value"}
      <button className="btn btn-warning" onClick={handleChangeDEC}>
        DEC
      </button>
      <p>{mulipleTwo}</p>
      <button
        className="btn btn-warning"
        onClick={() => setShow((prev) => !prev)}
      >
        Change
      </button>
    </div>
  );
};

export default State;
