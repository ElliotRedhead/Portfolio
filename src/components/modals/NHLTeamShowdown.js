import React, { useState } from "react";


/**
 * React Hooks are used to toggle visibility of this element, a conditional ternary operator determines what visibility to pass based on the current state.
 */
const NHLTeamShowdown = () => {
  const [modalVisibility, invertVisibility] = useState("visible");

  const inversionHandler = () => {
    let invertedState = (modalVisibility === "invisible") ? "visible" : "invisible";
    return invertedState;
  };

  return (
    <div>
      <p className={modalVisibility}>This line toggles visibility with the button activation.</p>
      <button onClick={
        () => {
          invertVisibility(inversionHandler());
        }}>
				Click me
      </button>
    </div>
  );
};

export default NHLTeamShowdown;