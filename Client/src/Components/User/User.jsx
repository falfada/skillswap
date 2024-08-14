import React from "react";
import "./User.css";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { UPDATE_USER, ADD_SKILL } from "../../utils/mutation";
// TODO: implement useEffect to add a skill
// TODO: render list of skills
// TODO: implement remove skill mutation

function User() {
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [addSkill, { errorSkill }] = useMutation(ADD_SKILL);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { skill, value } = e.target;
    setSkillInput({ ...skillInput, [skill]: value });
  };

  const { loading, data } = useQuery(GET_ME);

  console.log(data?.me);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [skillInput, setSkillInput] = useState({
    skill: "",
    category: "",
  });

  useEffect(() => {
    setFormData({ name: data?.me.name, email: data?.me.email });
  }, [data]);

  const handleSubmit = async () => {
    try {
      console.log("Form submitted");
      const { data } = await updateUser({
        variables: { ...formData },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSkillSubmit = async () => {
    try {
      const { data } = await addSkill({
        variables: { ...skillInput },
      });
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <div className="container p-10">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full min-h-screen"
      >
        <section className="flex flex-col p-6 w-1/2">
          <label htmlFor="name"> Full Name</label>
          <input
            id="name"
            name="name"
            placeholder="Full Name"
            required={true}
            value={formData.name}
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

          <input type="submit" className="bg-blue-600 text-white" />
        </section>
        {/* <section className="flex flex-col p-6 w-1/2">
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
        </section> */}
      </form>

      <form onSubmit={handleSkillSubmit}>
        <section className="flex flex-col p-6 w-1/2">
          <label htmlFor="skill">Add skill</label>
          <input
            id="skill"
            name="skill"
            placeholder="skill"
            required={true}
            value={skillInput.skill}
            type="text"
            onChange={handleSkillChange}
          />

          <label htmlFor="category">Add Category</label>
          <input
            id="category"
            name="category"
            placeholder="category"
            required={true}
            value={skillInput.category}
            type="text"
            onChange={handleSkillChange}
          />

          <input type="submit" className="bg-blue-600 text-white" />
        </section>
      </form>
    </div>
  );
}
export default User;
