import { useState } from "react";
import "./QuantitySelector.css";

const QuantitySelector = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="quantity">
      <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default QuantitySelector;
