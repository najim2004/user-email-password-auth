import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignUp = () => {
    const [pValidation, setPValidation] = useState('');
    const [pShowHied, setPShowHied] = useState(false);
    const handleSignUp = (e) => {
        e.preventDefault();
        setPValidation('');
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.username.value;
        if (!/[A-Z]/.test(password)) {
            setPValidation('Your password should be at least one uppercase characters.');
            return;
        }
        console.log(email, password, username);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                updateProfile(user,{
                    displayName: username,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                alert('User created successfully')
                sendEmailVerification(auth.currentUser)
                    .then((emailVerification) => {
                        console.log(emailVerification);
                        alert('Verification email sent to'+ email);

                    })
                    .catch((error) => alert(error.message));

            })
            .catch((error) => alert(error.message));
        e.target.username.value = ''
        e.target.password.value = ''
        e.target.email.value = ''
    };



    return (
        <div className="flex flex-col justify-center h-[calc(100vh-68px)] items-center">
            <div className="bg-gray-200 flex flex-col justify-center items-center p-12 rounded-lg shadow-2xl">
                <h3 className="mb-6 text-xl font-bold">Please Sign Up</h3>
                <div className="w-[300px]">
                    <form onSubmit={handleSignUp} className="flex flex-col justify-center">

                        <label htmlFor="">Username</label>
                        <label className="input  mb-5 input-bordered !outline-black flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" name="username" placeholder="Username" />
                        </label>

                        <label htmlFor="">Email address</label>
                        <label className="input mb-5 input-bordered !outline-black flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" required className="grow" name="email" placeholder="Email" />
                        </label>

                        <label htmlFor="">Password</label>
                        <label className="input  mb-5 input-bordered !outline-black flex items-center  gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type={pShowHied ? "text" : "password"} required name="password" placeholder="Password" className="grow " />
                            <span className="text-2xl h-full flex items-center" onClick={() => setPShowHied(!pShowHied)}>

                                {pShowHied ? <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                }
                            </span>
                        </label>
                        {pValidation && <label className="text-red-500">{pValidation}</label>}
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="terms" required id="" />
                            <label htmlFor="">Accepted our <a className="text-red-400" href="#">terms and conditions</a></label>
                        </div>
                        <input className="btn mt-8 bg-green-400 text-lg font-semibold text-white" type="submit" value="Sign Up Now" />
                    </form>
                    <p className="mt-2">Already have an account? Please <Link className="text-red-500" to={'/signin'}>Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;