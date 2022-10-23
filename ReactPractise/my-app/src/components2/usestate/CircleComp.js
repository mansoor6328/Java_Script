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

  export default CircleComp