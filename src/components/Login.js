import { useState ,useRef} from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Netflix_bg } from "../utils/constants";
const Login=()=>{
    const email=useRef();
    const pass=useRef();
    const [errormsg,seterrormsg]=useState("");
    const [isSignIn,setisSignIn]=useState(true);
    const toggleSign=()=>{
        setisSignIn(!isSignIn);
    }

    
    const navigate=useNavigate();
    const checkvalid=()=>{
       const error=validate(email.current.value,pass.current.value);
       seterrormsg(error);
       if(error)return ;
       if(isSignIn){
       ///sign up authentication
       createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
       .then((userCredential) => {
        // Signed up 
        ///////const user = userCredential.user;
        //console.log(userCredential);
        // ...
        navigate("/browse")
        })
      .catch((error) => {
       ///const errorCode = error.code;
       const errorMessage = error.message;
    seterrormsg(errorMessage);
    // ..
    navigate("/")
       });
       }

       else{
        signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in 
      ///////////////////  /*  const user = userCredential.user;*/////////
        //  console.log(userCredential);
          // ...
          navigate("/browse")
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorMessage);
        });
      
       }
    }
return (
  
    <div className="bg-black">
    <Header/>
     <img src={Netflix_bg} alt="bg-logo" className="absolute bg-black h-full w-full"></img>
     <div className="flex items-center justify-center h-screen bg-black">
  <div className="absolute w-1/2 sm:w-3/12 p-4 bg-black bg-opacity-80 rounded-lg text-white">
    <form className="bg-transparent w-full mx-auto " onSubmit={(e)=>e.preventDefault()}> 
      <h1 className="text-white text-3xl p-2">{isSignIn ?"Sign Up" : "Sign In"}</h1>
      {
        isSignIn && <input type="text" placeholder="Enter name" className="m-2 p-2 w-11/12 rounded-lg bg-gray-600" />
      }
      <input ref={email} type="text" placeholder="Enter email" className="m-2 p-2 w-11/12 rounded-lg bg-gray-600" />
      <input ref={pass} type="password" placeholder="Enter Password" className="m-2 p-2 w-11/12 rounded-lg  bg-gray-600" />
      <button onClick={checkvalid} className="bg-red-700 p-2 m-2 w-11/12 rounded-lg text-white  hover:opacity-60">{isSignIn ? "Sign Up" :"Sign In"} </button>
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










