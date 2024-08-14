import "react";
import "./User.css";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/mutation";

function User() {
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
    // console.log("e", e);
    // const value = e.target.value;
    // const name = e.target.value;
    // console.log("value" + value, "name" + name);
    // setFormData((preState) => ({
    //   ...preState,
    //   [name]: value,
    // }));
  };
  const { loading, data } = useQuery(GET_ME);

  console.log(data?.me);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    setFormData({ name: data?.me.name, email: data?.me.email});
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

  

          <input type="submit" className="bg-cyan-950 text-white" />
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
    </div>
  );
}
export default User;
