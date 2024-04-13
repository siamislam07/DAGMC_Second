import { useContext, useState } from "react"
import { useLottie } from "lottie-react";
import img from "../../assets/animationJson/register.json"
import icon from "../../assets/animationJson/loginicon.gif"
import { Link, useNavigate } from "react-router-dom";
import Center from "../../utilits/Center";
import googles from "../../assets/animationJson/google.gif"
import github from "../../assets/animationJson/github.gif"
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import PageTitle from "../../components/PageTitle";

const SignUp = () => {

    const { googleLogIn, createUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const options = {
        animationData: img,

        loop: true,
    };
    const { View } = useLottie(options);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [url, setUrl] = useState('')
    const [password, setPassword] = useState('')


    const handleRegister = (e) => {
        e.preventDefault()
        const user = { name, email, url, password }
        console.log(user);
        
        if (password.length < 6) {
            // setError('Password should be at least 6 characters or longer')
            toast.error('Password should be at least 6 characters or longer')
            return
        }
        // else if (!/[A-Z]/.test(password)) {
        //     toast.error('Password should have at least one upper case')
        //     return
        // }
        // else if (!/[^a-zA-Z0-9._-]/.test(password)) {
        //     toast.error('Password should have at least one special character')
        //     return
        // }
        

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: url
                })
                .then()
                .catch()
                toast.success("Register Successful")
                navigate(location?.state ? location.state : '/')
                e.target.reset()
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
                e.target.reset()
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                toast.success('Register Complete')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    return (
        <Center className="">
            <PageTitle title="Register"/>
            <div className="flex  mx-auto items-center mt-10 justify-center min-h-[700px]  dark:bg-transparent  ">

                <div className="flex flex-row-reverse gap-4 rounded-2xl shadow-lg dark:bg-transparent dark:shadow-2xl">
                    {/* form section */}
                    <div className="sm:w-1/2 sm:px-16 md:px-16 lg:px-32  mb-5">
                        <div className="flex">
                            <h2 className="font-bold text-3xl mt-5">Register</h2>
                            <img className="w-20 " src={icon} alt="" />
                        </div>
                        <hr className="w-8  " />
                        {/* <p className="text-sm mt-4">By creating an account or signing in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies.</p> */}

                        <form className="flex md:block lg:block  flex-col gap-2" onSubmit={handleRegister}>
                            {/* <div class="input-field">
                                <input type="text" id="name" required />
                                <label for="name">Your name:</label>
                            </div> */}
                            <input className="p-2  px-3 w-72 ring-1  ring-violet-600 mt-8 rounded-xl border hover:shadow-lg" type="text" name="name" placeholder="Your name" onBlur={e => setName(e.target.value)} required />
                            <input className="p-2  px-3 w-72 ring-1 duration-300 ring-violet-600 mt-8 rounded-xl border hover:shadow-lg" type="email" name="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} required />
                            {/* <input className="p-2  px-3 w-72 ring-1 duration-300 ring-violet-500 mt-7 rounded-xl border hover:shadow-lg" type="url" name="url" placeholder="PhotoUrl" onBlur={e => setUrl(e.target.value)} required /> */}
                            <input className="p-2  px-3 w-72 ring-1 duration-300 ring-violet-500 mt-7 rounded-xl border hover:shadow-lg" type="password" name="password" placeholder="Password" onBlur={e => setPassword(e.target.value)} required />
                            <button type="submit" className="bg-gradient-to-r w-72  from-violet-600 to-indigo-600 text-white font-semibold rounded-xl py-2 mt-5 shadow-lg hover:scale-105 duration-300">Register</button>
                        </form>

                        <div className="mt-10 w-72 grid grid-cols-3 items-center text-gray-500 ">
                            <hr className="border-gray-500" />
                            <p className="text-center">OR</p>
                            <hr className="border-gray-500" />
                        </div>

                        <button onClick={handleGoogleLogIn} className="bg-white w-72 mb-5 shadow-lg hover:scale-105 duration-300 border bg-gradient-to-r from-purple-300 to-indigo-400   rounded-xl mt-5 flex justify-center items-center text-sm">
                            <img className="w-10 " src={googles} alt="" />
                            Continue With Google</button>

                        <div>
                            <p className="border-t text-2xl py-4 w-72 border-gray-400">Already have an Account?<Link to='/login'><span className="underline text-white ">Login</span></Link></p>
                        </div>
                    </div>

                    {/* logo section */}
                    <div className="w-full  ml-24  mt-56 hidden sm:block">
                        <span className="mt-5 "  >{View}</span>
                    </div>
                </div>
            </div>

        </Center>
    )
}

export default SignUp;