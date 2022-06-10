import React from "react";
import classnames from "classnames";

import { Check } from "../";
import { Item } from "../../types";

interface SubRowProps {
  items: Item[];
}

export function SubRowContainer({ items }: SubRowProps) {
  const subItems = items.map((item) => {
    const label = item.completed && <Check />;
    const subTitleClass = classnames("subTitle", {
      subTitleComleted: item.completed,
    });

    const subRowItemClass = classnames("subRowItem", {
      subRowItemCurrent: item.current,
    });

    return (
      <div className={subRowItemClass} key={item.title}>
        {label}
        <div className={subTitleClass}>{item.title}</div>
      </div>
    );
  });

  const subRowClasses = classnames("subRow");

  return <div className={subRowClasses}>{subItems}</div>;
}
