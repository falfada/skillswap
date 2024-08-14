import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { UPDATE_USER, ADD_SKILL, REMOVE_SKILL } from "../../utils/mutation";
import "./User.css";

function User() {
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [addSkill, { error: errorSkill }] = useMutation(ADD_SKILL, {
    onError: (error) => console.error("Error adding skill:", error),
    onCompleted: () => {
      setSuccessMessage("Skill added successfully!");
      refetch();
    }
  });
  const [removeSkill, { error: errorRemoveSkill }] = useMutation(REMOVE_SKILL, {
    onError: (error) => console.error("Error removing skill:", error),
    onCompleted: () => {
      setSuccessMessage("Skill removed successfully!");
      refetch();
    }
  });

  const { loading, data, refetch } = useQuery(GET_ME);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [skillInput, setSkillInput] = useState({
    skill: "",
    category: "",
  });
  const [skills, setSkills] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (data?.me) {
      setFormData({ name: data.me.name, email: data.me.email });
      setSkills(data.me.skills || []);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setSkillInput({ ...skillInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted");
      await updateUser({
        variables: { ...formData },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    
    if (!skillInput.skill.trim() || !skillInput.category.trim()) {
      console.error("Skill and category are required.");
      return;
    }
    
    try {
      console.log("Skill Input:", skillInput);
      await addSkill({
        variables: { skill: skillInput },
      });
      setSkillInput({ skill: "", category: "" });
    } catch (err) {
      console.error("Error adding skill:", err);
    }
  };

  const handleRemoveSkill = async (skillId) => {
    try {
      await removeSkill({
        variables: { skillId }
      });
    } catch (err) {
      console.error("Error removing skill:", err);
    }
  }
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container flex-wrap p-10">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 flex justify-center min-h-screen"
      >
        <section className="w-full flex flex-col p-6">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            type="text"
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            type="email"
            onChange={handleChange}
          />

  

          <input type="submit" value="Update" className="bg-cyan-950 text-white" />
        </section>
      </form>

      <form onSubmit={handleSkillSubmit} className="w-1/2">
        <section className="flex flex-col p-6 w-full">
          <label htmlFor="skill">Add Skill</label>
          <input
            id="skill"
            name="skill"
            placeholder="Skill"
            required
            value={skillInput.skill}
            type="text"
            onChange={handleSkillChange}
          />

          <label htmlFor="category">Add Category</label>
          <input
            id="category"
            name="category"
            placeholder="Category"
            required
            value={skillInput.category}
            type="text"
            onChange={handleSkillChange}
          />

          <input type="submit" value="Add Skill" className="bg-blue-600 text-white" />
        </section>
      </form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <section className="p-6 w-full">
        <h2>Your Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill._id} onClick={() => handleRemoveSkill(skill._id)}>
              {skill.skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default User;
