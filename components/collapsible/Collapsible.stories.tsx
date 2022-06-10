import React, {useCallback, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Collapsible } from "./Collapsible";

export default {
  title: "Collapsible",
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Demo = function Demo() {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = useCallback(() => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [collapsed, setCollapsed]);

  return (
    <>
      <button onClick={toggle}>Exapnd</button>
      <Collapsible collapsed={collapsed}>
        <div className="item">One </div>
        <div className="item">Two</div>
        <div className="item">Three</div>
        <div className="item">FOur</div>
      </Collapsible>
    </>
  );
};

export const Primary: ComponentStory<typeof Collapsible> = () => <Demo />;
