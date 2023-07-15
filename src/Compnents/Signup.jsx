const  Signup= () => {
    return ( 
        <div className="signup-body">
        <div className="signup-box">
            <form className="signup-form">
            <h2>Signup</h2>
           <div className="inputbox">
            <input type="text" required/>
            <span>Username</span>
            <i></i>
           </div>
           <div className="inputbox">
            <input type="text" required/>
            <span>Password</span>
            <i></i>
           </div>
           <div className="links">
             <a href="#">Forgot Password</a>
             <a href="#">Login</a>
           </div>
           <input type="submit" value="Sign up" />
            </form>
        </div>
        </div>
     );
}
 
export default Signup ;