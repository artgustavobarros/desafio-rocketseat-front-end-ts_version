import { createContext, useEffect, useState} from "react";
import { AuthProviderProps, AddNotesProps, SignInProps, UpdateProps} from "./types";
import { api } from "../../services/api";

export const AuthContext = createContext({})

export const AuthProvider = ({children}: AuthProviderProps) =>{

  const [data, setData] = useState({})

  async function signIn({email, password}: SignInProps){
    
    try{
      const response = await api.post('/users/login', {email, password})
      console.log(response)
      const {user, token} = response.data
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)

      setData({user, token})

    }catch(err){
      if (err instanceof Error){
        alert(err.message);
      }
    }
  }

  async function update({name, email, old_password, new_password}: UpdateProps){
    try{
      const response = await api.post('/users/update',{name, email, old_password, new_password})
      setData((prev) => ({...prev, user: response.data.user}))
    }catch(err){
      if (err instanceof Error){
        alert(err.message);
      }
    }
  }

  function signOut(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    setData({})
  }

  async function addNote({title, description, rating, arr_tags}: AddNotesProps){
    try{
      await api.post('/notes/register', {title, description, rating, arr_tags})
    }catch(err){
      if (err instanceof Error){
        alert(err.message)
      }
    }
  }

  useEffect(() =>{
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({token: token, user: JSON.parse(user)})
    }

  },[])


  return(
    <AuthContext.Provider value={{data, signIn, signOut, update, addNote}}>
      {children}
    </AuthContext.Provider>
  )
}