import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetClick = () =>{
    setCount(0)
  }

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <p>Du har klikket {count} {count === 1 ? "gang" : "gange"}.</p>
      <button onClick={handleClick}>Count Click</button>
      <button onClick={resetClick}>Reset Count</button>
    </div>
  );
}

export default Counter;