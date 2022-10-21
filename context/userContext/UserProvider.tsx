import {useState} from 'react'
import {FullUrlJson, UserJson, ReducedUser, UserInterface, LoginResponse} from './interfaces'
import UserContext from './UserContext'
import {fullUrl, loggedInUser} from '../../api'
import * as SecureStore from 'expo-secure-store'

/* await SecureStore.setItemAsync('secure_token','sahdkfjaskdflas$%^&');
const token = await SecureStore.getItemAsync('secure_token');
console.log(token); // output: sahdkfjaskdflas$%^& */

interface UserProviderProps{
    children:JSX.Element | JSX.Element[]
}


const INITIAL_STATE = {
    username:'',
    firstName:'',
    lastName:'',
    _id:'',
}

const UserProvider = ({children}:UserProviderProps) => {

    const [user, setUser] = useState(INITIAL_STATE)

    function reduceUser(user:UserInterface):ReducedUser{
        const {username, firstName, lastName, _id} = user
        const reducedUser:ReducedUser = {username, firstName, lastName, _id: _id.toString()}
        return reducedUser
    }

    async function loginUser(data:LoginResponse){
        setUser(reduceUser(data.user))
        await SecureStore.setItemAsync('access_token',data.access_token);
    }

    function isLoggedIn(){
        return user._id !== ''
    }

    async function logoutUser(){
        setUser(INITIAL_STATE)
        await SecureStore.deleteItemAsync('access_token')
    }
    return(
        <UserContext.Provider value={{user, loginUser, logoutUser, isLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider