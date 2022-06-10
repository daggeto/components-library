import React from "react";

import {Row} from './components';
import {Item} from './types';

import "./Accordion.scss";

interface AccordionProps {
  items: Item[];
}

export function Accordion({ items }: AccordionProps) {
  const rows = items.map((item, index) => {
    return (
      <Row
        key={item.title}
        text={item.title}
        indexNumber={index + 1}
        completed={item.completed}
        disabled={item.disabled}
        subList={item.items}
      />
    );
  });

  return <div className="accordion">{rows}</div>;
}

