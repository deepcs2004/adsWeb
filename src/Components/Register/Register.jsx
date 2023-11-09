import React, { useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const registerForm = useRef(null)

    const {user, registerUser } = useAuth()

    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            navigate('/account')
        }
    }, [])


    const handelSubmit = (e) => {
        e.preventDefault()

        const username = registerForm.current.elements.username.value
        const email = registerForm.current.elements.email.value
        const password = registerForm.current.elements.password.value
        const confirmPassword = registerForm.current.elements.confirmPassword.value

        if (password != confirmPassword) {
            alert('pass not match')
            return
        }

        const userInfo = { username, email, password, confirmPassword }
        registerUser(userInfo)




    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-md">

                <div className="bg-white rounded p-8 shadow-md">

                    <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

                    {/* actual form */}
                    <form ref={registerForm} onSubmit={handelSubmit} className="mt-6">

                        <div className="mb-4">

                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handelSubmit}
                        >
                            Sign Up
                        </button>

                        <p className="mt-4 text-center">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Log In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
