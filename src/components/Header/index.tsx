import { Link, useNavigate } from "react-router-dom"
import Input from "../Input"
import { Container, Logo, Profile } from "./styles"
import { useAuth } from "../../hooks/context/context"
import { useState } from "react"
import avatarPlaceholder from '../../assets/imgs/avatar_placeholder.svg'
import { api } from "../../services/api"

const Header = () =>{
  const navigate = useNavigate()
  const {signOut, fetchNotesByTitle, data} = useAuth()

  const {user} = data

  const [search, setSearch] = useState('')

  const avatarURL = user.avatar? `${api.defaults.baseURL}/users/img/${user.avatar}`: avatarPlaceholder

  function handleSignOut(){
    navigate('/')
    signOut()
  }

  function handleSearch(e:React.ChangeEvent<HTMLInputElement>){
    navigate('/')
    setSearch(e.target.value)
    fetchNotesByTitle({title: search})
  }

  return(
    <Container>
        <Logo to='/'>
          RocketMovies
        </Logo>
      <Input placeholder="Pesquisar pelo título" onChange={(e) => handleSearch(e)}/>
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>Sair</button>
        </div>
        <div>
          <Link to='/profile'>
            <img
              src={avatarURL}
              alt='avatar profile'
            />
          </Link>
        </div>
      </Profile>
    </Container>
  )
}

export default Header