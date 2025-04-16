import { useState } from "react";

export const TextBox = () => {
  const [user, setUser] = useState({ name: "Ram", age: 21, city: "Chennai" });

  function changeName(e) {
    //1st method
    const newStateObject = { ...user };
    newStateObject.name = e.target.value;
    setUser(newStateObject);
  }

  function changeAge(e) {
    //2nd method
    setUser((oldState) => {
      return { ...oldState, age: e.target.value };
    });
  }

  function changeCity(e) {
    //3rd method
    setUser({ ...user, city: e.target.value });
  }
  return (
    <>
      <h1>Simple Form</h1>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.city}</h2>
      <form>
        <input
          type="text"
          placeholder="Enter User Name"
          onChange={changeName}
          value={user.name}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter User Age"
          onChange={changeAge}
          value={user.age}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter User Age"
          onChange={changeCity}
          value={user.city}
        />
      </form>
    </>
  );
};
