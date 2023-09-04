const Skill = ({ name }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return (
    <p className="skill" style={{ backgroundColor: `#${randomColor}` }}>
      {name}
    </p>
  );
};

export default Skill;
