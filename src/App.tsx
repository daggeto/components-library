import React from "react";

import { Collapsible } from "../components/collapsible";

export function App() {
  return (
    <>
      <Collapsible collapsed={true}>
        <div>One</div>
        <div>Two</div>
      </Collapsible>
      Hello
    </>
  );
}
