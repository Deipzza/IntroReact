const levelEmojis = {
  beginner: "👶",
  intermediate: "👍",
  advanced: "💪"
};

const Skill = ({ skillObject }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return (
    <p className="skill" style={{ backgroundColor: skillObject.color }}>
      {skillObject.skill} {levelEmojis[skillObject.level]}
    </p>
  );
};

export default Skill;
