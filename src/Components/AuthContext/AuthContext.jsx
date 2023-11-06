import { useContext, useState, useEffect, createContext, Children } from "react";
import { account } from '../../AppWriteConfig';


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)



    useEffect(() => {
        checkUserStatus()
        
    }, [])


    const loginUser = async (userInfo) => {
        setLoading(true)

        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get()

            console.log('accountDetails:',accountDetails)
            setUser(accountDetails)

        } catch (error) {
            console.error(error)
        }


        setLoading(false)
    }



    const logOutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }



    const registerUser = (userInfo) => {

    }


    const checkUserStatus = async() => {

        try {
            let accountDetails = await account.get()
            setUser(accountDetails)

        } catch (error) {
            
        }

        setLoading(false)
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