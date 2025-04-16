import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({ name: "", age: "", city: "" });

  const getAllUsers = async () => {
    await axios
      .get("http://localhost:8000/users")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
        setFilterUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  //! Search Function
  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();

    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.city.toLowerCase().includes(searchText)
    );

    setFilterUsers(filteredUsers);
  };

  //! Delete
  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (isConfirmed) {
      await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
        setUsers(res.data);
        setFilterUsers(res.data);
      });
    }
  };

  //! Add User Details
  const handleAddRecord = () => {
    setUserData({ name: "", age: "", city: "" });
    setIsModalOpen(true);
  };
  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.id) {
      await axios
        .patch(`http://localhost:8000/users/${userData.id}`, userData)
        .then((res) => {
          console.log(res);
        });
    } else {
      await axios.post("http://localhost:8000/users", userData).then((res) => {
        console.log(res);
      });
    }

    closeModel();
    setUserData({ name: "", age: "", city: "" });
  };

  //! Update User Record
  const handleUpdateRecord = (user) => {
    setUserData(user);
    setIsModalOpen(true);
  };

  //! Close Model
  const closeModel = () => {
    setIsModalOpen(false);
    getAllUsers();
  };

  return (
    <>
      <div className="contianer">
        <h3>CRUD Applilcation with React.js Frontend and Node.js Backend</h3>
        <div className="input-search">
          <input
            type="search"
            placeholder="Search Here"
            onChange={handleSearchChange}
          />
          <button className="btn green" onClick={handleAddRecord}>
            Add Record
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers &&
              filterUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>
                    <button
                      className="btn green"
                      onClick={() => handleUpdateRecord(user)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn red"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="model">
            <div className="model-content">
              <span className="close" onClick={closeModel}>
                &times;
              </span>
              <h2>{userData.id ? "Update Record" : "Add Record"}</h2>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  value={userData.name}
                  name="name"
                  id="name"
                  onChange={handleData}
                />
              </div>
              <div className="input-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  value={userData.age}
                  name="age"
                  id="age"
                  onChange={handleData}
                />
              </div>
              <div className="input-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  value={userData.city}
                  name="city"
                  id="city"
                  onChange={handleData}
                />
              </div>
              <button className="btn green" onClick={handleSubmit}>
                {userData.id ? "Update User" : "Add User"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
