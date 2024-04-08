import { createContext, useState} from "react";
import { AuthProviderProps, SignInProps} from "./types";
import { api } from "../../services/api";

export const AuthContext = createContext({})

export const AuthProvider = ({children}: AuthProviderProps) =>{

  const [data, setData] = useState({})

  async function signIn({email, password}: SignInProps){
    
    try{
      const response = await api.post('/users/login', {email, password})
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

  function signOut(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setData({})
  }


  return(
    <AuthContext.Provider value={{signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}