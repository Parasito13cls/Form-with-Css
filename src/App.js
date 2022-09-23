import React from 'react';
import './style.css';

export default function App() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    address: '',
    isCool: false,
  });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  let message;
  if (formData.isCool) {
    message = <p>I am Cool</p>;
  } else {
    message = <p>I Suck Ass</p>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <div className="data">
        <h3>Enter Info: See the Magic</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            name="fullName"
            value={formData.fullName}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <input
            type="text"
            placeholder="Address"
            onChange={handleChange}
            name="address"
            value={formData.address}
          />
          <br />
          <label htmlFor="">Are you Cool?</label>
          <input
            type="checkbox"
            value={formData.isCool}
            name="isCool"
            onChange={handleChange}
            id="isCool"
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>

      <div className="formText">
        <h3>{formData.fullName}</h3>
        <h3>{formData.email}</h3>
        <p>{formData.address}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}
