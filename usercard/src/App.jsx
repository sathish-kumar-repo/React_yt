import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      {userData.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
}

export default App;

const userData = [
  {
    name: "Sathish",
    city: "New York",
    description: "Front-end developer",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
    ],
    online: false,
    profile: "img/1.jpeg",
  },
  {
    name: "Sam",
    city: "Australi",
    description: "Back-end developer",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
    ],
    online: true,
    profile: "img/2.jpeg",
  },
  {
    name: "Devi",
    city: "London",
    description: "Front-end developer",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
    ],
    online: false,
    profile: "img/3.jpeg",
  },
];
