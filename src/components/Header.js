import { useNavigate } from "react-router-dom"
import {signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userSlice";
import { Logo } from "../utils/constants";
import { setuser,setuser1 } from "../utils/GPTslice";
import { setLang } from "../utils/GPTslice";
import { update_movie_detail } from "../utils/moviecardSlice";
const Header=()=>{
  const dispatch=useDispatch();
  const handleSelectChange = (event) => {
    dispatch(setLang(event.target.value));
  };
   useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //console.log(user);
        const {uid,email,displayName} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/");
      }
    });


},[])
   const handleGPT=()=>{
    
     dispatch(setuser());
     dispatch(update_movie_detail(null));
     
   }
   
   ///subscribing to the store
    const user=useSelector(store=>store.user);
    const GPT=useSelector(store=>store.GPT.gpt);
   /// console.log(user);
    const navigate=useNavigate();
    const handleclick=()=>{
   //on signout navigate to login page
   signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
   }).catch((error) => {
  // An error happened.
   });
    }
    const handleHome=()=>{
      dispatch(setuser1());
      dispatch(update_movie_detail(null));
     }
  
 
    return (
    //  <div className="p-2 fixed z-10 bg-black w-full flex justify-between text-white">
    //   <img src={Logo} alt="logo" className="w-36"></img>
    //   {user && <div className="flex">
    //   <button onClick={handleGPT} className="text-white bg-blue-400 m-2 p-2 rounded-lg  z-100 cursor-pointer">GPT Search</button>
    //   <button onClick={handleclick} className="text-white bg-red-600 m-2 p-2 rounded-lg  cursor-pointer">Sign Out</button>
    //  {GPT &&  <button onClick={handleHome} className="text-white bg-red-600 m-2 p-2 rounded-lg  cursor-pointer">Home</button> }
    //  {GPT &&  <select
    //     onChange={handleSelectChange} className="text-white bg-red-600 m-2 p-2 rounded-lg  cursor-pointer">
    //       <option value="en">English</option>
    //       <option value="hindi">Hindi</option>
    //       <option value="spainish">spainish</option>
        
    //     </select>
    //   }
      
    //   </div>
    //   }
    //  </div>
    <div className="p-2 fixed z-10 bg-black w-full flex flex-col sm:flex-row items-center justify-between text-white">

    {/* Logo centered for small devices */}
    <img src={Logo} alt="logo" className="w-36 sm:self-start  mb-2 sm:mb-0"></img>

    {user && 
        <div className="flex flex-wrap sm:flex-nowrap">

            {/* GPT Search button */}
            <button onClick={handleGPT} className="text-white bg-blue-400 m-2 p-2 rounded-lg cursor-pointer hover:opacity-60">GPT Search</button>

            {/* Sign Out button */}
            <button onClick={handleclick} className="text-white bg-red-600 m-2 p-2 rounded-lg cursor-pointer  hover:opacity-60">Sign Out</button>

            {/* Home button (visible only when GPT is true) */}
            {GPT &&  
                <button onClick={handleHome} className="text-white bg-red-600 m-2 p-2 rounded-lg cursor-pointer  hover:opacity-60">Home</button>
            }

            {/* Language select (visible only when GPT is true) */}
            {GPT &&  
                <select
                    onChange={handleSelectChange}
                    className="text-white bg-red-600 m-2 p-2 rounded-lg cursor-pointer  hidden sm:block  hover:opacity-60"
                >
                    <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Spanish</option>
                </select>
            }
      
        </div>
    }
</div>



    )
}
export default Header;