import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TEInput, TERipple } from 'tw-elements-react';
import { ADD_USER } from '../utils/mutation';

export default function SignupPage() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [signup, { error, loading }] = useMutation(ADD_USER, {
    onCompleted: (data) => {
      console.log('User signed up:', data);
      // Store the token in local storage or state management library
      localStorage.setItem('token', data.addUser.token);
      // Redirect to dashboard or homepage
      window.location.href = '/user';
    },
    onError: (err) => {
      console.error('Error signing up:', err.message);
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupInfo.password !== signupInfo.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    signup({ variables: { name: signupInfo.name, email: signupInfo.email, password: signupInfo.password } });
  };

  return (
    <div>
      <section className="h-full bg-gradient-to-r from-cyan-400 to-white flex justify-center items-center">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center	 text-sky-950">
            <div className="w-full max-w-md">
              <div className="block rounded-lg bg-white shadow-lg p-8">
                <div className="text-center mb-6">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    Skillswap
                    <br></br> <em>Join the Community</em>
                  </h4>
                </div>
                {error && <div className="bg-cyan-950 text-center mb-4">{error.message}</div>}
                <form onSubmit={handleSignup}>
                  <p className="mb-4">Create your account</p>
                  <TEInput
                    type="name"
                    label="name"
                    name="name"
                    placeholder="Full name"
                    value={signupInfo.name}
                    onChange={handleChange}
                    className="mb-4"
                    required
                  ></TEInput>
                  <TEInput
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={signupInfo.email}
                    onChange={handleChange}
                    className="mb-4"
                    required
                  ></TEInput>
                  <TEInput
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Password"
                    value={signupInfo.password}
                    onChange={handleChange}
                    className="mb-4"
                    required
                  ></TEInput>
                  <TEInput
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={signupInfo.confirmPassword}
                    onChange={handleChange}
                    className="mb-6"
                    required
                  ></TEInput>
                  <div className="text-center">
                    <TERipple rippleColor="light" className="w-full">
                      <button
                        type="submit"
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-cyan-950 shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 hover:text-white disabled:opacity-50"
                        disabled={loading}
                      >
                        {loading ? 'Signing up...' : 'Sign Up'}
                      </button>
                    </TERipple>
                  </div>
                </form>
                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2">Already have an account?</p>
                  <TERipple rippleColor="light">
                    <button
                      type="button"
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-cyan-950 shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 hover:text-white disabled:opacity-50"
                      onClick={() => window.location.href = '/login'}
                    >
                      Log In
                    </button>
                  </TERipple>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
