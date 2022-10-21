import { useEffect } from 'react'
import {Text, View, StyleSheet} from 'react-native'

import { useUser } from '../hooks/useUser'
import HeaderButtons from '../components/HeaderButtons'

const Home = ({navigation}: any) => {
  const {user, isLoggedIn} = useUser()
  useEffect(()=>{
    navigation.setOptions({
      
        title: isLoggedIn()?`Hello ${user.firstName}`:'Home',
        headerRight:() =>(<HeaderButtons/>),
       // headerLeft: 
      
    })
  })

  return (
    <Text> Home </Text>
  )
}

export default Home