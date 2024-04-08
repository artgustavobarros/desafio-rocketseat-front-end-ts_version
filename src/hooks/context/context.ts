import { useContext } from "react"
import { AuthContext } from "./auth"
import { AuthContextProps } from "./types"

export const useAuth = () => useContext(AuthContext) as AuthContextProps