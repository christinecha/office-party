import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Desk } from "./Desk";
import { Chair } from "./Chair";

import "./index.scss";

const Office = () => {
  return (
    <div className="office">
      <div className="wall">
        <div className="behind-desk">
          <Chair />
        </div>
        <Desk />
      </div>
      <div className="floor"></div>
    </div>
  );
};

const App = () => {
  return <Office />;
};

ReactDOM.render(<App />, document.getElementById("app"));
