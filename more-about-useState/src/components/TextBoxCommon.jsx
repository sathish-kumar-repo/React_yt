import { useState } from "react";

export const TextBoxCommon = () => {
  const [user, setUser] = useState({ name: "Ram", age: 21, city: "Chennai" });

  function changeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log([e.target.name]);
    // console.log({ ...user, name: "sathish" });
  }

  return (
    <>
      <h1>Handle All TextBox</h1>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.city}</h2>
      <form>
        <input
          type="text"
          placeholder="Enter User Name"
          name="name"
          onChange={changeHandler}
          value={user.name}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter User Age"
          name="age"
          onChange={changeHandler}
          value={user.age}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter User Age"
          name="city"
          onChange={changeHandler}
          value={user.city}
        />
      </form>
    </>
  );
};
