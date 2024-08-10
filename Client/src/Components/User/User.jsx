import React from "react";

function User() {
  const handleSubmit = () => {
    console.log("Form submitted");
  };
  const handleChange = () => {
    console.log("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="firstName"> First Name</label>
        <input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          required={true}
          value={""}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          required={true}
          value={""}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="Skill">Skill</label>
        <input
          id="Skill"
          name="Skill"
          placeholder="Skill"
          required={true}
          value={""}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="Description">Description</label>
        <input
          id="Description"
          name="Description"
          placeholder="My skill is..."
          required={true}
          value={""}
          type="text"
          onChange={handleChange}
        />
        <input type="submit" />
      </section>
      <section>
            <label htmlFor="about">Profile image</label>
            <input type="url" name="url"id="url"onChange={handleChange} required={true} />
            <div className="">

            </div>
      </section>
    </form>
  );
}
export default User;
