import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          key={el.title}
          title={el.title}
          text={el.text}
          num={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
