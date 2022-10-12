import { View, Text, StyleSheet, Pressable, Button } from "react-native"
import {useState} from 'react'
import { useNavigation } from "@react-navigation/native"
import { useUser } from "../hooks/useUser";

type ScreenType = 'SignIn' | 'SignUp' | 'MyPets'| 'SignOut'

interface ItemMenuInterface {
    name:string;
    requiresUser:boolean;
    key:number;
    screen:ScreenType
}

const initialMenu:ItemMenuInterface[] =
    [
        {
            name:'Sign in',
            requiresUser:false,
            key:1,
            screen:'SignIn'
        },
        {
            name:'Sign Up',
            requiresUser:false,
            key:2,
            screen:'SignUp'
        },
        {
            name:'My Pets',
            requiresUser:true,
            key:3,
            screen:'MyPets'
        },
        {
            name:'Sign Out',
            requiresUser:true,
            key:4,
            screen:'SignOut'
        },
    ]



const HeaderButtons = () => {
    const navigation = useNavigation()
    const [menu, setMenu] = useState(initialMenu)
    const {user, isLoggedIn, logoutUser} = useUser()


    const handlePress = (screen:ScreenType) =>{
        screen == 'SignOut'? logoutUser(): navigation.navigate(screen)
    }

    const shouldShowButton = (requiresUser:boolean) =>{
        return requiresUser && isLoggedIn() || !requiresUser && !isLoggedIn()
    }

    return (
        <View style={styles.buttonsWrapper}>
            {menu.map(item => shouldShowButton(item.requiresUser)? <Pressable key={item.key} onPress={()=>{handlePress(item.screen)}} style={styles.button}><Text style={{color:'#333'}}>{item.name}</Text></Pressable>:'')}
        </View>
    )
}

export default HeaderButtons

const styles = StyleSheet.create({
    buttonsWrapper:{
        flexDirection: 'row'
    },
    button:{
        backgroundColor:'#ccc',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:10,
        margin:5,
        borderColor: '#333',
        borderWidth:1
        
    }
})