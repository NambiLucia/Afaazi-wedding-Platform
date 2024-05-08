import React from 'react'
import {useEffect, useState} from 'react';

function LoginForm ({title, type}) {
    const[organisation, setOrganisation] = useState([])
    let apiUrl = "http://localhost:1337/api/organisations?populate=*"
  
    useEffect(()=>{
        async function getData(){
            try {
                const responseData = await fetch(apiUrl)
                if (responseData){
                    const jsonData = await responseData.json()
                    setOrganisation(jsonData)
                }  
                
            } catch (error) {
                
            }
        }
    },[])
    const handleLogin = () => {
        console.log("click")
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="organizationContainerWrapper">
                <div className="rightContainer">
                    <div className="loginContainer">
                        <h3>Join the Afaazi Family</h3>
                        <div className="inputBox">
                            <input type="email" placeholder="Email address" required />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="buttonContainer">
                            <button type="submit" className="loginButton orgbutton">
                                SIGN IN
                            </button>
                        </div>
                        <p className="accountExists">Do not have an account? <a href="/register/SignUpForm">Sign Up</a></p>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default LoginForm;