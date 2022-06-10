import React, {useCallback, useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CollapsibleJs } from "./CollapsibleJs";

export default {
  title: "CollapsibleJs",
  component: CollapsibleJs,
} as ComponentMeta<typeof CollapsibleJs>;

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
      <CollapsibleJs collapsed={collapsed}>
        <div className="item">One </div>
        <div className="item">Two</div>
        <div className="item">Three</div>
        <div className="item">FOur</div>
      </CollapsibleJs>
    </>
  );
};

export const Primary: ComponentStory<typeof CollapsibleJs> = () => <Demo />;
