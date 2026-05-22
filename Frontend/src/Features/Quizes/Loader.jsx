import { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";
// import { ClipLoader, RingLoader , HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
//   borderColor: "red",
};

function Loader () {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="mt-25 sweet-loading  justify-center items-center">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}
    <HashLoader
    aria-label="Loading Spinner"
    cssOverride={override}
     color={color}
    size={120}
        data-testid="loader"
//   color="#61ceeb"
  speedMultiplier={1}
/>
      {/* <ClipLoader
        color={color}
      
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </div>
  );
}

export default Loader;
