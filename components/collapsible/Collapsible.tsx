import React, { useCallback, useState } from "react";
import classnames from "classnames";

import "./Collapsible.scss";

interface Props {
  children: React.ReactNode | React.ReactNode[],
  collapsed: Boolean,
}

export function Collapsible({children, collapsed}: Props) {

  const classNames = classnames("container", {
    collapsed: collapsed,
    expand: !collapsed,
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
