import { useContext, useState, useEffect, createContext, Children } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(true)

    

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
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(AuthContext)
}

export default AuthContext;