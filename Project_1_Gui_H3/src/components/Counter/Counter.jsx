import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Den nye count er: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = () => setCount(count + 1);
  const resetClick = () => setCount(0);
  const countDown = () => setCount(count - 1);

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <p>
        Du har klikket {count} {count === 1 ? "gang" : "gange"}.
      </p>
      <button onClick={handleClick}>Count Up</button>
      <button onClick={resetClick}>Reset Count</button>
      <button onClick={countDown}>Count Down</button>
    </div>
  );
}

export default Counter;
