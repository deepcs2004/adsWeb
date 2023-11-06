import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useNavigationType } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

const Login = () => {

    const navigate = useNavigate()
    const { user, loginUser } = useAuth()

    const loginForm = useRef(null)


    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [])


    const handelSubmit = (e) => {
        e.preventDefault();
        const email = loginForm.current.elements.email.value
        const password = loginForm.current.elements.password.value


        const userInfo = { email, password }
        loginUser(userInfo)


    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-md">

                <div className="bg-white rounded p-8 shadow-md">

                    <h2 className="text-2xl font-semibold text-center">Login</h2>

                    {/* actual form */}
                    <form ref={loginForm} className="mt-6" onSubmit={handelSubmit}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                required
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-6">

                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>

                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handelSubmit}
                        >
                            Sign In
                        </button>
                        <p className="mt-4 text-center">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
