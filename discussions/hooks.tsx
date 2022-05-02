import React, { useState } from "react";

/**
 * 
 * This is a fairly simple "Do you understand the React lifecycle" question
 * There are two big things that could be improved here:
 * 
 * The first is a general programming note: foo and bar always have the same value — they can't be mutated in any way to ever be different
 * They should just be one variable
 * 
 * The other (and change the variables to true/false and 0/1 if the candidate has pointed out the above) more React-specific issue
 * is that we are dispatching 2 state-changing operations within the finish() callback.
 * The most appropriate way to fix this would be to consolidate the values into one object that contains .foo and .bar keys
 * This would reduce the state updates to 1 and prevent any issues with rendering
 */
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
