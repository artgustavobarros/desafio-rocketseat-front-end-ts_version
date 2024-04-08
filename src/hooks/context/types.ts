import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode
}

export interface SignInProps{
  email: string
  password: string
}