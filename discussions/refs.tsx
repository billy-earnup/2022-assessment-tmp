import React, { useState } from "react";
const MyComponent = ({ callbacks, data }) => {
  return (
    <div>
      <div id="myThirdPartyComponent" data-callbacks={callbacks} data-values={data} />
      <h1> Some Other html</h1>
    </div>
  );
};

export default MyComponent;
