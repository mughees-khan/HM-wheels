import "./signin.css"
function Login(){
    return(
        <div className="login-main">
             <div className="login">
                <input className="login-fields" type="email" placeholder="Enter your email" />
                <input className="login-fields" type="password" placeholder="Enter your password" />
                <button className="login-btn">login</button>
                <p className="login-signup">You have already account ? <a href="Signup" className="login-signup-link">signup</a></p>
            </div>
        </div>
    )
}
export default Login;