import { useState } from "react";

export const UserDetails = () => {
  //   const [userName, setUserName] = useState("Ram");
  //   const [userAge, setUserAge] = useState(21);

  //! Object type of variable
  const [user, setUser] = useState({ name: "Ram", age: 21 });

  const updateUserName = () => {
    // setUserName("Sathish");
    //! userName == "Ram" ? setUserName("Sathish") : setUserName("Ram");

    //   using spread operator to set default values expect changing value
    setUser({ ...user, name: "Sathish" });
  };
  const updateUserAge = () => {
    // setUserAge(25);
    //! userAge == "21" ? setUserAge(25) : setUserAge(21);

    setUser({ ...user, age: 25 });
  };
  return (
    <>
      <h1>User Details</h1>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <button onClick={updateUserName}>Update User Name</button>
      <button onClick={updateUserAge}>Update User Age</button>
    </>
  );
};
