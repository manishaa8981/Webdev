
const Reset = () =>{
    return(
        <>
            <div className={"forget-main"}>
                <h2>Reset Password</h2>
                <label>New Password</label>
                <input type={"paswword"} placeholder={"Enter your new password"}></input>
                <label>Confirm Password</label>
                <input type={"paswword"} placeholder={"Confirm your password"}></input>
            </div>
            <button >Reset</button>
        </>
    )
}
export default Reset