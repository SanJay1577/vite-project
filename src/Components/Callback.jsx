/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from "react";

const Callback = () => {
  const [state, setState] = useState(0);
  const [show, setShow] = useState(true);

  const handleDisplay = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChange = () => {
    setState((prev) => prev + 1);
  };
  const handleChangeDEC = () => {
    setState((prev) => prev - 1);
  };
  return (
    <div>
      <div className="grid grid-cols-3">
        <button className="btn btn-warning" onClick={handleChange}>
          INC
        </button>
        <p>{show && state}</p>
        <button className="btn btn-warning" onClick={handleChangeDEC}>
          DEC
        </button>
      </div>
      <div>
        <Display handleDisplay={handleDisplay} />
      </div>
    </div>
  );
};

export default Callback;

const Display = React.memo(({ handleDisplay }) => {
  console.log("display component renders");
  return (
    <div>
      <button className="btn btn-secondary" onClick={handleDisplay}>
        Show/Hide
      </button>
    </div>
  );
});
