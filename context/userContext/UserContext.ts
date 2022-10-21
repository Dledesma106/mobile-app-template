import { createContext} from "react";
import {ReducedUser} from './interfaces'
import {LoginResponse} from './interfaces'
interface UserContextProps{
    user: ReducedUser;
    loginUser: (data:LoginResponse) => Promise<void>;
    logoutUser: () => Promise<void>;
    isLoggedIn: () => boolean;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps)

export default UserContext
