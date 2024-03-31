import { useRef, useState } from "react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Link } from "react-router-dom";
const SignIn = () => {
    const [pValidation, setPValidation] = useState('');
    const [pShowHied, setPShowHied] = useState(false);


    const handleSignIn = (e) => {
        e.preventDefault();
        setPValidation('')
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch(() => {
                setPValidation('Your password or email account dosn\'t matched.');
            });
        e.target.password.value = ''
        e.target.email.value = ''
    };
    const emailRef = useRef(null);
    const handleForgetPassword = (e) => {
        e.preventDefault();
        setPValidation('')
        const email = emailRef.current.value;
        if (!email) {
            setPValidation('Please enter email address!');
            return;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setPValidation('Please enter a valid email address.');
            return;
        }
        console.log(emailRef.current.value);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setPValidation('We have sent you an email to reset your password.');
            })
            .catch((error) => {
                setPValidation(error.message);
            });
    };
    return (
        <div className="flex flex-col justify-center h-[calc(100vh-68px)] items-center">
            <div className="bg-gray-200 p-12 flex flex-col justify-center items-center rounded-lg shadow-2xl">
                <h3 className="mb-6 text-xl font-bold">Please Sign In</h3>
                <div className="w-[300px]">
                    <form onSubmit={handleSignIn} className="flex flex-col justify-center">
                        <label htmlFor="">Email address</label>
                        <label className="input mb-5 input-bordered !outline-black flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input ref={emailRef} type="email" name="email" className="grow" placeholder="Email" />
                        </label>
                        <label htmlFor="">Password</label>
                        <label className="input input-bordered !outline-black flex items-center  gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type={pShowHied ? "text" : "password"} name="password" placeholder="Password" className="grow " />
                            <span className="text-2xl h-full flex items-center" onClick={() => setPShowHied(!pShowHied)}>

                                {pShowHied ? <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                }
                            </span>
                        </label>
                        <div className="">
                            <a href="" onClick={handleForgetPassword} className=" hover:underline w-full ml-1">Forget password?</a>
                        </div>

                        {pValidation && <label className="text-red-500">{pValidation}</label>}


                        <input className="btn mt-8 bg-green-400 text-lg font-semibold text-white" type="submit" value="Sign In Now" />
                    </form>
                    <p className="mt-2">New to this website? Please <Link className="text-red-500" to={'/signup'}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;