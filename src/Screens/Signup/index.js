import "./signup.css"
function Signup() {
    return (
        <div className="signup-main">
            <div className="signup">
                <input className="signup-fields" type="text" placeholder="Enter your full name" />
                <input className="signup-fields" type="email" placeholder="Enter your email" />
                <input className="signup-fields" type="password" placeholder="Enter your password" />
                <input className="signup-fields" type="password" placeholder="Confirm your password" />
                <button className="signup-btn">Sign up</button>
                <p className="signup-login">You have already account ? <a href="Signin" className="signup-login-link">login</a></p>
            </div>
        </div>
    )
}
export default Signup;