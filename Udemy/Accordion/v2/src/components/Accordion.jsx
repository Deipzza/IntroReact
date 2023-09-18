import { useState } from "react";

import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={el.title}
          title={el.title}
          text={el.text}
          num={index}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
