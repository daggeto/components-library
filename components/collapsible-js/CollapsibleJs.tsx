import React, { useEffect, useRef, useState } from "react";

import "./CollapsibleJs.scss";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  collapsed: Boolean;
}

export function CollapsibleJs({ children, collapsed}: Props) {
  const [firstRender, setFirestRender] = useState(true);
  const collapsibleElement = useRef(null);

  function collapseSection() {
    var sectionHeight = collapsibleElement.current.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = collapsibleElement.current.style.transition;
    collapsibleElement.current.style.transition = "";

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
      collapsibleElement.current.style.height = sectionHeight + "px";
      collapsibleElement.current.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function () {
        collapsibleElement.current.style.height = 0 + "px";
      });
    });
  }

  function expandSection() {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = collapsibleElement.current.scrollHeight;

    // have the element transition to the height of its inner content
    collapsibleElement.current.style.height = sectionHeight + "px";

    // when the next css transition finishes (which should be the one we just triggered)
    collapsibleElement.current.addEventListener("transitionend", function (e) {
      // remove this event listener so it only gets triggered once
      collapsibleElement.current.removeEventListener("transitionend", arguments.callee);

      // remove "height" from the element's inline styles, so it can return to its initial value
      collapsibleElement.current.style.height = null;
    });
  }

  useEffect(() => {
    if (collapsed) {
      collapsibleElement.current.style.height = 0 + "px";
    } else {
      const sectionHeight = collapsibleElement.current.scrollHeight;
      collapsibleElement.current.style.height = sectionHeight + "px";
    }
    
    setFirestRender(false);
  }, []);

  useEffect(() => {
    if (firstRender) return;

    if (collapsed) {
      collapseSection();
    } else {
      expandSection();
    }
  }, [collapsed]);

  return (
    <div ref={collapsibleElement} className="CollapsibleContainer">
      {children}
    </div>
  );
}
