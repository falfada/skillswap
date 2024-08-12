import React from "react";
import "./User.css";
import { useState } from "react";

function User() {
  const [formData, setFormData] = useState({
    user_id: "",
    fistName: "",
    lastName: "",
    email:"",
    Skill: "",
    Description: "",
    url: "",
    matches: [],
  });
  const handleSubmit = () => {
    console.log("Form submitted");
  };
  const handleChange = (e) => {
    console.log("e", e);
    const value = e.target.value;
    const name = e.target.value;
    console.log("value" + value, "name" + name);

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  return (
    <div className="container p-10">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full min-h-screen"
      >
        <section className="flex flex-col p-6 w-1/2">
          <label htmlFor="firstName"> First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required={true}
            value={formData.fistName}
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required={true}
            value={formData.lastName}
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="email"
            required={true}
            value={formData.email}
            type="email"
            onChange={handleChange}
          />
          <label htmlFor="Skill">Skill</label>
          <input
            id="Skill"
            name="Skill"
            placeholder="Skill"
            required={true}
            value={formData.Skill}
            type="text"
            onChange={handleChange}
          />
          <label htmlFor="Description">Description</label>
          <input
            id="Description"
            className="h-32"
            name="Description"
            placeholder="My skill is..."
            required={true}
            value={formData.Deescription}
            type="text"
            onChange={handleChange}
          />
          <input type="submit" className="bg-blue-600 text-white" />
        </section>
        <section className="flex flex-col p-6 w-1/2">
          <label htmlFor="about">Profile image</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={handleChange}
            required={true}
          />
          <div className=" w-full">
            <img src={formData.url} alt="Profile Photo" />
          </div>
        </section>
      </form>
    </div>
  );
}
export default User;
