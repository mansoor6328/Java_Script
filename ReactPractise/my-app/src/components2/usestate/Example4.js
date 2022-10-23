import { useEffect, useState } from "react";

export default function App() {
  const [i1, seti1] = useState("");
  const [i2, seti2] = useState("");

  const defaultSignal = {
    red: false,
    yellow: false,
    green: false,
  };

  const [signal1, setSignal1] = useState(defaultSignal);
  const [signal2, setSignal2] = useState(defaultSignal);

  const handleSignal = () => {
    if (i1 > 10) {
      setSignal1({ ...defaultSignal, red: true });
      if (i2 > 10) setSignal2({ ...defaultSignal, green: true });
      else setSignal2({ defaultSignal, yellow: true });
    } else if (i1 > 0) {
      setSignal1({ defaultSignal, yellow: true });
      if (i2 > 10) setSignal2({ defaultSignal, red: true });
      else if (i2 > 0) setSignal2({ defaultSignal, yellow: true });
      else setSignal2({ defaultSignal, green: true });
    } else {
      setSignal1({ defaultSignal, green: true });
      setSignal2({ defaultSignal, red: true });
    }
  };
  return (
    <div className="App">
      <div>
        <input value={i1} onChange={(e) => seti1(e.target.value)} />
        <input value={i2} onChange={(e) => seti2(e.target.value)} />
        <button type="button" onClick={handleSignal}>
          click
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="container">
          <CircleComp color="red" isOn={signal1.red} />
          <CircleComp color="yellow" isOn={signal1.yellow} />
          <CircleComp color="green" isOn={signal1.green} />
        </div>

        <div className="container">
          <CircleComp color="red" isOn={signal2.red} />
          <CircleComp color="yellow" isOn={signal2.yellow} />
          <CircleComp color="green" isOn={signal2.green} />
        </div>
      </div>
    </div>
  );
}

const CircleComp = (prop) => {
  const { color, isOn } = prop;
  return (
    <div
      style={{ backgroundColor: color, opacity: isOn ? 0.8 : 0.2 }}
      class="circle"
    >
      <p class="text"> </p>
    </div>
  );
};
