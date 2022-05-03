import React, { useState } from "react";

const MyComponent = (props) => {
  const [foo, setFoo] = useState(true);
  const [bar, setBar] = useState(true);

  const finish = () => {
    setFoo(false);
    setBar(false);
  };
  return <div onClick={finish} />;
};

export default MyComponent;
