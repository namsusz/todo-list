import React from "react";
import "./Palette.css";

function Palette({ colors, selected, onSelect }) {
  const colorlist = colors.map(color => (
    <Color
      color={color}
      active={selected === color}
      onClick={() => onSelect(color)}
      key={color}
    />
  ));
  return <div className="palette">{colorlist}</div>;
}

function Color({ color, active, onClick }) {
  return (
    <div
      className={`color ${active && "active"}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
}

export default Palette;
