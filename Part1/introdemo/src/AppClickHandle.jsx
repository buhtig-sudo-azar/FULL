import { useState } from "react";

const AppCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClickZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={handleClickZero}>zero</button>
    </div>
  );
};

export default AppCounter;
43;
