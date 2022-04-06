import React from "react";

import "./style.css";

function Error({ message }) {
  return (
    <div>
      <div className="err"> Error:{message}</div>
    </div>
  );
}

export default Error;
