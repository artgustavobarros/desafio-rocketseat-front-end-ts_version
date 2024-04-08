import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode
}


export interface SignInProps{
  email: string
  password: string
}

export interface AuthContextProps{
  signIn: ({email, password}: SignInProps) => void
  data: {
    user: {
      avatar?: string
      created_at: string
      updated_at: string
      id: string
      email: string
      password: string
      name: string
    },
    token: string
  }
  signOut: () => void 
}
