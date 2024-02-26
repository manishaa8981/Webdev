import Link from '@mui/material/Link';

const Forget = () =>{
   return(
       <>
           <div className={"forget-main"}>
               <h2>Forget Password</h2>
               <label>Email</label>
               <input type={"email"} placeholder={"Enter your email"}></input>
           </div>
          <Link href="/reset" > <button >Confirm</button>
          </Link>
       </>
   )
}
export default Forget

