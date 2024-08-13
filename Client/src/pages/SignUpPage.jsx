import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutation';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-400 to-white">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {showAlert && (
          <div className="bg-red-500 text-white p-4 mb-4 rounded">
            Something went wrong with your signup!
          </div>
        )}
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              value={userFormData.username}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={userFormData.email}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={userFormData.password}
              onChange={handleInputChange}
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
