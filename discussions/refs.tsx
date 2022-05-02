import React, { useState } from "react";
/**
 * This test is meant for more advanced React engineers to see how well they understand the nitty-gritty of the React vDOM and lifecycle
 * 
 * The first thing we want them to do is talk us through how we would implement Foo 3rd party component (a fictional iframe). We need a consistent reference to that in the DOM
 * A React Engineer should be able to sniff out that the proper solution is useRef very quickly. If you find the engineer fumbling around coming up with a bespoke situation remember:
 * 1. It's probably nerves
 * 2. These aren't bread-and-butter APIs and may not be top of mind for even an Engineer doing React everyday
 * 
 * If struggling, gently suggest that the React hooks may contain the answer (there are over a dozen built in hooks, so this is not a dead giveaway)
 * 
 * Once we have a consistent reference to the compoonent, let's expand the fictional scenario further. Let's pretend that the fictional library is a data-charting library
 * That performs a bunch of expensive calculations as part of the initial render (via the callbacks). Have a candidate talk through how they would optimize for that.
 * 
 * Like all coding questions, this is technically open-ended, but we do want to see that the candidate is familiar with the standard tools in the framework and comfortable using them
 * They should be able to realize that a useCallback or useMemo hook would be the appropriate call here. The dependency could be hooked to either the incoming data prop or additionally to the ref created above.
 */
const MyComponent = ({ callbacks, data }) => {
  return (
    <div>
      <div id="myThirdPartyComponent" data-callbacks={callbacks} data-values={data} />
      <h1> Some Other html</h1>
    </div>
  );
};

export default MyComponent;
