import Skill from "./Skill";

const skills = [
  "Python 💪",
  "JavaScript 💪",
  "TypeScript 💪",
  "SQL 👍",
  "MongoDB 🫱",
  "Git & Github 👍"
];

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill} />
      ))}
    </div>
  );
};

export default SkillList;
