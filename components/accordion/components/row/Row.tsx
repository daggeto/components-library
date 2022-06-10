import React from "react";
import classnames from "classnames";

import { Check, SubRowContainer } from "../";
import { Item } from "../../types";
import { CollapsibleJs } from "../../../collapsible-js/CollapsibleJs";

interface RowProps {
  text: string;
  indexNumber: number;
  completed: boolean;
  disabled: boolean;
  subList: Item[];
}

export function Row({ text, indexNumber, completed, disabled, subList }: RowProps) {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleCollapsed = React.useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed, setCollapsed]);

  const rowContent = {
    label: indexNumber,
    text,
    rowClass: "",
    circleClass: "",
  };

  if (disabled) {
    rowContent.rowClass = "row-disabled";
    rowContent.circleClass = "circle-disabled";
  } else if (completed) {
    rowContent.rowClass = "row-completed";
    rowContent.circleClass = "circle-completed";
    rowContent.label = <Check />;
  }

  const subListItems = subList && subList.length > 0 && (
    <CollapsibleJs collapsed={collapsed}>
      <SubRowContainer items={subList} />
    </CollapsibleJs>
  );

  const collapsedIcon = collapsed ? <i className="fa-solid fa-plus">+</i> : <i className="fa-solid fa-minus">-</i>;

  const actions =
    subList && subList.length > 0 ? (
      <div className="actions" onClick={toggleCollapsed}>
        {collapsedIcon}
      </div>
    ) : null;

  return (
    <div>
      <div className={classnames("row", rowContent.rowClass)}>
        <div className="label">
          <div className={classnames("circle", rowContent.circleClass)}>{rowContent.label}</div>
          <div className="title">{rowContent.text}</div>
        </div>
        {actions}
      </div>
      {subListItems}
    </div>
  );
}
