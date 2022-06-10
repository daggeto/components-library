import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Demo = function Demo() {
  const items = [
    { title: "Quick question", completed: true },
    {
      title: "Enter accounts",
      items: [
        { title: "Income and Assets", completed: true },
        { title: "Fixed Spending", completed: true },
        { title: "Discretionary Spending", current: true },
        { title: "Review Budget" }
      ]
    },
    { title: "Plan options", disabled: true }
  ];

  return (
    <>
      <Accordion items={items}/>
    </>
  );
};

export const Primary: ComponentStory<typeof Accordion> = () => <Demo />;
