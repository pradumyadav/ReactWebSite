import { useEffect, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import BaseURL from './BaseURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const notify = (param) => toast.success(`${param}`, {
        position: "top-right",
    });

    const showError = (param) => toast.error(`${param}`, {
        position: "top-right",
    });

    const navigate = useNavigate();

    useEffect(() => {
        checkLoggedIn();
    }, []);

    const checkLoggedIn = () => {
        if (sessionStorage.getItem("name")) {
            navigate("/admin/dashboard");
        }
    }

    const handleSubmit = async () => {
        console.log(`${BaseURL()}/api/admin/login`);
        const response = await axios.post(`${BaseURL()}/api/admin/login`, {
            email,
            password
        });

        if (response.data.message == "Login successful") {
            console.log("Login successful");
            notify("Login successful");
            sessionStorage.setItem("name", email);
            sessionStorage.setItem("role", "admin");
            navigate("/admin/dashboard");
        } else {
            console.log("Login failed");
            showError("Login failed");
        }
        console.log(email, password);
    }

    return (
        <div className="min-h-screen bg-custom-gradient flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="relative">
                    <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl transform translate-y-4"></div>
                    <div className="relative bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                                <img src="/assets/images/logo-transparent.png" className='h-1/2 auto' alt="" />
                            </div>
                        </div>
                        <div className="mt-16 space-y-6">
                            <div className="rounded-md -space-y-px">
                                <div className="mb-4">
                                    <label htmlFor="email-address" className="sr-only">Email ID</label>
                                    <div className="relative">
                                        <FaUser className="absolute top-3 left-3 text-primary" />
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 bg-white bg-opacity-50 border border-primary border-opacity-30 placeholder-primary placeholder-opacity-70 text-dark-blue focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Email ID"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <div className="relative">
                                        <FaLock className="absolute top-3 left-3 text-primary" />
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 bg-white bg-opacity-50 border border-primary border-opacity-30 placeholder-primary placeholder-opacity-70 text-dark-blue focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 ease-in-out"
                                >
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;