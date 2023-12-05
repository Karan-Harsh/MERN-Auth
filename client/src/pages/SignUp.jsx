import {Link} from "react-router-dom";

function SignUp() {
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-center">Sign UP</h1>
            <form className="flex flex-col gap-4 p-3">
                <input className="bg-slate-100 rounded-lg p-3" type="text" placeholder="Username" id="username"/>
                <input className="bg-slate-100 rounded-lg p-3" type="email" placeholder="Email" id="email"/>
                <input className="bg-slate-100 rounded-lg p-3" type="password" placeholder="password" id="password"/>
                <button className="uppercase bg-slate-700 text-white rounded-lg p-3 hover:opacity-90 disabled:opacity-80">Sign up</button>
            </form>
            <div className="flex p-3 gap-2 mt-5">
                <p>Have an account ?</p>
                <Link to="/sign-in" >
                <span className="text-blue-700">Sign In</span>
                </Link>
            </div>
        </div>
    )
}

export default SignUp
