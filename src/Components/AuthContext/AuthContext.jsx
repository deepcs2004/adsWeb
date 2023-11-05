import { useContext, useState, useEffect, createContext, Children } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    useEffect(()=>{
        setLoading(false)
    },[])


    const loginUser=(userInfo)=>{

    }



    const logOutUser =()=>{

    }



    const registerUser =(userInfo)=>{

    }


    const checkUserStatus =()=>{

    }


    // loading all the data here to pass inside the value for context

    const contextData = {
        user,
        loginUser,
        logOutUser,
        registerUser,
        
    }


    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : Children}
        </AuthContext.Provider>
    )
}

export default AuthContext;