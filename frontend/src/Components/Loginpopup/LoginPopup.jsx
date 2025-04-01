import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext)
    const [currState, setCurrentState] = useState("Login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))

    }
    // useEffect(()=>{
    //     console.log(data)
    // },[data])
    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currState === "login") {
            newUrl += "/api/user/login"

        }
        else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)

        }
        else {
            alert(response.data.message)
        }



    }
    // //ai 
const handleAutoLogin = async () => {
    const loginUrl =`${url}/api/user/login`;

    try {
        const loginResponse = await axios.post(loginUrl, {
            email: data.email,
            password: data.password,
        });

        if (loginResponse.data.success) {
            setToken(loginResponse.data.token);
            localStorage.setItem("token", loginResponse.data.token);
            setShowLogin(false);
        } else {
            alert(loginResponse.data.message);
        }
    } catch (error) {
        console.error("Error during auto-login:", error);
        alert("An error occurred during auto-login. Please try again.");
    }
}
    return (
        <div className='Login-Popup'>
            <form onSubmit={onLogin} className="login-popup-contianer">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='your name' required />}

                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="your email" required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="password" />
                    <button type='submit' onClick={handleAutoLogin}>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                    <div className="login-popup-condtion">
                        <input type="checkbox" required />

                        <p>By continuing , I agree to the term of use & Privacy policy</p>
                    </div>
                    {currState === "Login" ?
                        <p>Create a new account? <span className='con' onClick={() => setCurrentState("Sign Up")}>Click here</span></p> :
                        <p>Alraedy have an account? <span className='con' onClick={() => setCurrentState = ("Login")}>Login here</span></p>}

                </div>


            </form>

        </div>
    )
}

export default LoginPopup
// //ai
// const handleAutoLogin = async () => {
//     const loginUrl =` ${url}/api/user/login`;

//     try {
//         const loginResponse = await axios.post(loginUrl, {
//             email: data.email,
//             password: data.password,
//         });

//         if (loginResponse.data.success) {
//             setToken(loginResponse.data.token);
//             localStorage.setItem("token", loginResponse.data.token);
//             setShowLogin(false);
//         } else {
//             alert(loginResponse.data.message);
//         }
//     } catch (error) {
//         console.error("Error during auto-login:", error);
//         alert("An error occurred during auto-login. Please try again.");
//     }
// }
