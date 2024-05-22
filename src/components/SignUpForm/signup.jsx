import React from "react";
import NavBar from "../NavBar";

import RegisterForm from "../Register/RegisterForm"
import {useEffect, useState} from 'react';

function SignUpForm () {
    const [users, setUsers] = useState([])
  let apiUrl = "http://http://localhost:5173//api/users?populate=*"

  useEffect(()=>{
    async function getData(){
      try {
        const responseData = await fetch(apiUrl)
        if (responseData){
          const jsonData = await responseData.json()
          setUsers(jsonData)
    }
  } catch (error) {
      console.log(error)
    }}
  },[])
  
    return (
        <>
           <NavBar />
            <RegisterForm title="Create An Afaazi Account" type="sign" />
       
        </>
    )
}
export default SignUpForm;