

import React, { useState } from 'react';


function Devolopment() {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      designation: '',
      location: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData); 
    };
  
    return (
      <div className="container">
        <h2 className="title">Business Development</h2>
  
        <form onSubmit={handleSubmit}>
          <div className="image-section">
            <input type="file" accept="image/*" className="image-input" />
          </div>
  
          <div className="field-container">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <div className="field-container">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <div className="field-container">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <div className="field-container">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <div className="field-container">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    );
  }

export default Devolopment;
