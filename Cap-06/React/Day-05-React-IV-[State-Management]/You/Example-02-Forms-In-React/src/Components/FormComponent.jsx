import { useState } from "react";

const FormComponent = () => {
  const [user, setUser] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    country: "",
    isMarried: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const formInputValue =
      type === "checkbox" ? checked : type === "number" ? Number(value) : value;

    const newState = {
      ...formState,
      [name]: formInputValue,
    };

    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserArray = [...user, formState];
    setUser(newUserArray);

    console.log(newUserArray);
  };

  return (
    <div id="container">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={handleInputChange}
            required
          />
          <input
            name="age"
            type="number"
            placeholder="Enter Age"
            onChange={handleInputChange}
            required
          />
          <select name="country" onChange={handleInputChange} required>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Nepal">Nepal</option>
            <option value="USA">USA</option>
            <option value="UAE">UAE</option>
            <option value="UK">UK</option>
          </select>
          <label htmlFor="isMarried">
            Married :{" "}
            <input
              name="isMarried"
              type="checkbox"
              onChange={handleInputChange}
              required
            />
          </label>
          <input type="Submit" />
        </form>
      </div>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Age</th>
            <th>Married</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td style={{ color: item.age > 18 ? "green" : "red" }}>
                  {item.age}
                </td>
                <td>{item.isMarried ? "Yes" : "No"}</td>
                <td>{item.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormComponent;
