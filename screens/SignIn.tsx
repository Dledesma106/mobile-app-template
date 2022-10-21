import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Input from '../components/Input'
import {useState} from 'react'
import Button from '../components/Button'
import {useUser} from '../hooks/useUser'
import {login} from '../api'

interface UserLoginForm{
  username:string,
  password:string
}

interface LoginResponseJson{
  success:boolean;
  data:{
    access_token:string
  }
}

const SignIn = ({navigation}:any) => {
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const {loginUser} = useUser()
  const [form, setForm] = useState({
    username:'',
    password:''
  })

  
  const formValidate = () => {
    let err : UserLoginForm = {username:'', password:''}
    if (!form.username) err.username = 'username is required'
    if (!form.password) err.password = 'password is required'
    
    return err
  }
  
  const postData = async (form:UserLoginForm) => {
    try {
      const res: Response = await fetch(login, {
        method: 'POST',
        mode:'no-cors',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify({...form, appRequest:true}),
      })

      // Throw error with status code in case Fetch API req failed
      console.log(res)
      if (!res.ok) {
        throw new Error('failed to login')
      }
      const json/* :Promise<LoginResponseJson>  */= await res.json()
      console.log(json)
      loginUser((await json).data)
      
      
      navigation.navigate('Home')
    } 
    catch (error) {
      console.log(error)
      alert('wrong username/password')
    }
  }

  const submit = () => {
    const errs = formValidate()
    if (errs.username == '' && errs.username == '') {
      postData(form)
    } else {
      setErrors({ errs })
    }
  }

  return (
    <View>
      <Input
        title='Username'
        value={form.username}
        custom={{
          onChangeText:username => setForm(prev => ({...prev, username}))
        }}
      />
      <Input
        title='Password'
        value={form.password}
        custom={{
          onChangeText:password => setForm(prev=>({...prev, password}))
        }}
      />
      <Button title='Login' action={submit}/>
      
      <Text>{message}</Text>
      <View>
        {Object.keys(errors).map((err, index) => (
          <Text key={index}>{err}</Text>
        ))}
      </View>

    </View>
  )
}

export default SignIn


const styles = StyleSheet.create({
    

})