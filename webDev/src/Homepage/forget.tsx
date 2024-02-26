import Link from '@mui/material/Link';
import React, {useState} from "react";
import Reset from "./reset.tsx";

const Forget = () =>{
    const [reset, setReset] = useState(false);
    const toggleReset = () => {
        setReset(!reset);
    };
    return(
       <>
           <div className={"forget-main"}>
               <form>
               <h2>Forget Password</h2>
               <label>Email</label>
                   <input type={"email"} placeholder={"Enter your email"}></input>
               </form>
           </div>
          <button ><a href="#" onClick={toggleReset} > Confirm</a></button>
           {reset && <Reset />}
       </>
   )
}
export default Forget

