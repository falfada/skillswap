import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TEInput, TERipple } from 'tw-elements-react';
import Nav from '../Components/Nav';
import { SIGNUP_USER } from '../utils/mutation';

export default function SignupPage() {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [signup, { error, loading }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      console.log('User signed up:', data);
      // Store the token in local storage or state management library
      localStorage.setItem('token', data.signup.token);
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
    signup({ variables: { email: signupInfo.email, password: signupInfo.password } });
  };

  return (
    <div>
      <Nav />
      <section className="h-full bg-gradient-to-r from-orange-400 to-white flex justify-center items-center">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full max-w-md">
              <div className="block rounded-lg bg-white shadow-lg p-8">
                <div className="text-center mb-6">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    Skillswap - Join the Community
                  </h4>
                </div>
                {error && <div className="text-red-500 text-center mb-4">{error.message}</div>}
                <form onSubmit={handleSignup}>
                  <p className="mb-4">Create your account</p>
                  <TEInput
                    type="email"
                    label="Email"
                    name="email"
                    value={signupInfo.email}
                    onChange={handleChange}
                    className="mb-4"
                    required
                  ></TEInput>
                  <TEInput
                    type="password"
                    label="Password"
                    name="password"
                    value={signupInfo.password}
                    onChange={handleChange}
                    className="mb-4"
                    required
                  ></TEInput>
                  <TEInput
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={signupInfo.confirmPassword}
                    onChange={handleChange}
                    className="mb-6"
                    required
                  ></TEInput>
                  <div className="text-center">
                    <TERipple rippleColor="light" className="w-full">
                      <button
                        type="submit"
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:opacity-50"
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
                      className="inline-block rounded border-2 border-orange-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-orange-500 transition duration-150 ease-in-out hover:bg-orange-500 hover:text-white focus:outline-none"
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
