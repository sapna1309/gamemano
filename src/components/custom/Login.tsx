"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [message, setMessage] = useState({ message: "", status: 0 });
    const router = useRouter();

    const handleSignIn = () => {
        const cred = localStorage.getItem("credential");
        if (cred !== null) {
            const c = JSON.parse(cred);
            if (c.password === password && c.username === username) {
                setMessage({ message: 'Login successfull!', status: 200 });
                router.push("/");
            } else {
                setMessage({ message: 'Invalid credentials', status: 400 });
            }
        } else {
            setMessage({ message: "Don't have an account please sign up first", status: 400 });
        }
    };

    const handleSignUp = () => {
        if (!password || !username) {
            setMessage({ message: 'Missing require fields', status: 400 });
        }

        localStorage.setItem('credential', JSON.stringify({ username, password }));
        setMessage({ message: 'Account created successfully!', status: 200 });
        router.push("/")
    }


    return (
        <div className="w-full py-32 bg-black bg-opacity-50 flex justify-center items-center relative">
            <div className="w-[300px] h-[300px] rounded-full bg-accent-900 bg-opacity-30 absolute top-[20%] left-[20%] blur-[200px]"></div>
            <div className="w-[300px] h-[300px] rounded-full bg-accent-900 bg-opacity-30 absolute top-[60%] right-[30%] blur-[200px]"></div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-bg-brown bg-opacity-20 flex flex-col gap-10 px-8 py-12 rounded-3xl mt-10 z-[9] shadow-md">
                <p className="text-[18px] text-white text-opacity-80 font-[400] text-center -mb-10">{isSignUp ? 'Create your account to start your gaming journey' : 'One step behind to enjoy your favourite games'}</p>
                <h1 className="text-[50px] text-accent-900 font-algerian text-center">{isSignUp ? 'SIGN UP' : 'SIGN IN'}</h1>
                <p className={`text-[18px] ${message.status === 200 ? 'text-green-600' : message.status === 400 ? 'text-red-500' : 'text-white'} text-opacity-80 font-[400] text-center -mb-8`}>{message.message}</p>
                <input
                    type="text"
                    placeholder="Username"
                    className="bg-transparent pl-10 pr-2 h-[50px] text-white text-opacity-80 placeholder-white placeholder-opacity-60 focus:placeholder-transparent border-2 border-white border-opacity-60 rounded-full"
                    value={username}
                    onChange={({ target: { value } }) => setUsername(value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    className="bg-transparent pl-10 pr-2 h-[50px] text-white text-opacity-80 placeholder-white placeholder-opacity-60 focus:placeholder-transparent border-2 border-white border-opacity-60 rounded-full"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                />

                <button className="light-button" onClick={isSignUp ? handleSignUp : handleSignIn} >{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                <p className="font-poppins text-[16px] leading-6 text-white text-opacity-80 text-[400] -mt-6 text-center">{isSignUp ? 'Already have an acount? ' : "If you don't have an account? "} <span onClick={() => {
                    setIsSignUp(!isSignUp)
                    setMessage({ message: "", status: 0 })
                }} className="font-[500] text-accent-900 cursor-pointer hover:underline underline-offset-4">{isSignUp ? 'Sign In' : 'Sign Up'}</span></p>
            </form>
        </div>
    )
}

export { Login };