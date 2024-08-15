import  { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TEInput, TERipple } from 'tw-elements-react';
import { LOGIN_USER } from '../utils/mutation';

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const [login, { error, loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      console.log('User logged in:', data);
      // Store the token in local storage or state management library
      localStorage.setItem('token', data.login.token);
      // Redirect to dashboard or homepage
      window.location.href = '/user';
    },
    onError: (err) => {
      console.error('Error logging in:', err.message);
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login({ variables: { email: loginInfo.email, password: loginInfo.password } });
  };

  return (
    <div className="w-full">
      <section className="h-full bg-gradient-to-r from-cyan-400 to-white flex justify-center items-center">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-sky-950">
            <div className="w-full max-w-md">
              <div className="block rounded-lg bg-white shadow-lg p-8">
                <div className="text-center mb-6">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 className="mb-12 mt-1 pb-1 text-sky-950 font-semibold">
                    Skillswap
                    <br></br><em>Trade Skills, No Bills</em>
                  </h4>
                </div>
                {error && <div className="bg-cyan-950 text-center mb-4">{error.message}</div>}
                <form onSubmit={handleLogin}>
                  <p className="mb-4">Please login to your account</p>
                  <TEInput
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={loginInfo.email}
                    onChange={handleChange}
                    className="mb-4"
                    required
                  ></TEInput>
                  <TEInput
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Password"
                    value={loginInfo.password}
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
                        {loading ? 'Logging in...' : 'Log In'}
                      </button>
                    </TERipple>
                    <a href="#!" className="inline-block mt-4	">
                      Forgot password?<br></br> <span>_</span>
                    </a>
                  </div>
                </form>
                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2">Don`t have <br></br>an account?</p>
                  <TERipple rippleColor="light">
                    <button
                      type="button"
                      className="mt-2 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-cyan-950 shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 hover:text-white disabled:opacity-50"
                    >
                      Register
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
