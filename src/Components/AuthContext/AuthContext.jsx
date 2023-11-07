import { useContext, useState, useEffect, createContext, Children } from "react";
import { account } from '../../AppWriteConfig';
import { ID } from "appwrite";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)



    useEffect(() => {
        checkUserStatus()

    }, [])

    // to login user function
    const loginUser = async (userInfo) => {
        setLoading(true)

        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get()

            setUser(accountDetails)

        } catch (error) {
            console.error(error)
        }


        setLoading(false)
    }


    // to logout function
    const logOutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }


    // to register new user function
    const registerUser = async (userInfo) => {
        setLoading(true)

        try {
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password,
                userInfo.username,
            )

            await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get()

            // initailizing the coin value for creating databse
            const initialCoinValue = 0;

            await appwrite.database.createDocument('users', response.$id, {

                coins: initialCoinValue,

            });

            setUser(accountDetails)


        } catch (error) {
            console.error(error)
        }

        setLoading(false)
    }

    // to stay logedin function
    const checkUserStatus = async () => {

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