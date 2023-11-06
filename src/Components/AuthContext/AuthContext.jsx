import { useContext, useState, useEffect, createContext, Children } from "react";
import { account } from '../../AppWriteConfig';


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)



    useEffect(() => {
        setLoading(false)
    }, [])


    const loginUser = async (userInfo) => {
        setLoading(true)

        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )

            console.log('session:',response)

        } catch (error) {
            console.error(error)
        }


        setLoading(false)
    }



    const logOutUser = () => {

    }



    const registerUser = (userInfo) => {

    }


    const checkUserStatus = () => {

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

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext;