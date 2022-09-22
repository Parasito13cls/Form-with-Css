import React from 'react';
import './style.css';

export default function App() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    address: '',
  });

  console.log(formData);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  return (
    <div className="App">
      <div className="form">
        <form>
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
        </form>
      </div>

      <div className="formText">
        <h3>{formData.fullName}</h3>
        <h3>{formData.email}</h3>
        <p>{formData.address}</p>
      </div>
    </div>
  );
}
