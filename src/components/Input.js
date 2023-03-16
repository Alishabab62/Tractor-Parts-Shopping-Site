import React from "react";

export default function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.fun}
        min={props.min}
        max={props.max}
        value={props.value}
      />
    </div>
  );
}
