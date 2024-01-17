import { useState ,useRef} from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
const Login=()=>{
    const email=useRef();
    const pass=useRef();
    const [errormsg,seterrormsg]=useState("");
    const [isSignIn,setisSignIn]=useState(true);
    const toggleSign=()=>{
        setisSignIn(!isSignIn);
    }
    const checkvalid=()=>{
       const error=validate(email.current.value,pass.current.value);
       console.log(email);
       seterrormsg(error);
    }
return (
  
    <div>
    <Header/>
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-logo" className="absolute"></img>
     <div className="flex items-center justify-center h-screen">
  <div className="absolute w-3/12 p-4 bg-black bg-opacity-80 rounded-lg text-white">
    <form className="bg-transparent w-full mx-auto " onSubmit={(e)=>e.preventDefault()}> 
      <h1 className="text-white text-3xl p-2">{isSignIn ?"Sign Up" : "Sign In"}</h1>
      {
        isSignIn && <input type="text" placeholder="Enter name" className="m-2 p-2 w-11/12 rounded-lg bg-gray-600" />
      }
      <input ref={email} type="text" placeholder="Enter email" className="m-2 p-2 w-11/12 rounded-lg bg-gray-600" />
      <input ref={pass} type="password" placeholder="Enter Password" className="m-2 p-2 w-11/12 rounded-lg  bg-gray-600" />
      <button onClick={checkvalid} className="bg-red-700 p-2 m-2 w-11/12 rounded-lg text-white">{isSignIn ? "Sign Up" :"Sign In"} </button>
    <div className="p-2 m-2"> <label className="text-gray-500 p-2"><input type="checkbox"/>Remember me</label>  </div>
    <p className="text-red-700 p-2">{errormsg}</p>
    <p className="p-2 cursor-pointer" onClick={toggleSign}>{isSignIn ?  "Already a user ?":"New to netflix? Sign Up"}</p>
    </form>
  </div>
</div>

    </div>
    
 
)
}
export default Login;








