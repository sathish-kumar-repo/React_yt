import { useState } from "react";
import "./App.scss";
import data from "./data.json";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container">
        <h3>Filter Table Data</h3>
        <form>
          <input
            className="input-search"
            type="search"
            placeholder="Search Text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search === ""
                  ? item
                  : item.first_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                      item.last_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.email.toLowerCase().includes(search.toLowerCase()) ||
                      item.phone.includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
