import { createContext, useState} from "react";
import { AuthProviderProps, SignInProps} from "./types";
import { api } from "../../services/api";

export const AuthContext = createContext({})

export const AuthProvider = ({children}: AuthProviderProps) =>{

  const [data, setData] = useState({})
  const [ logged, setLogged] = useState(false)

  async function signIn({email, password}: SignInProps){
    try{
      const {data} = await api.post('/users/login', {email, password})
      const {user, token} = data
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      console.log(user, token)

      alert('Sucessfully logged')

      setData(user)
      setLogged(true)

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
      
    }catch(err){
      if (err instanceof Error){
        alert(err.message);
      }
      setLogged(false)
    }
  }


  return(
    <AuthContext.Provider value={{data, signIn, logged}}>
      {children}
    </AuthContext.Provider>
  )
}