import { Link, useNavigate } from "react-router-dom"
import Input from "../Input"
import { Container, Logo, Profile } from "./styles"
import { useAuth } from "../../hooks/context/context"
import { useState } from "react"

const Header = () =>{
  const navigate = useNavigate()
  const {signOut, fetchNotesByTitle} = useAuth()

  const [search, setSearch] = useState('')

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
          <strong>Rodrigo Gonçalves</strong>
          <button onClick={handleSignOut}>Sair</button>
        </div>
        <div>
          <Link to='/profile'>
            <img
              src='https://avatars.githubusercontent.com/u/49030804?v=4'
              alt='avatar profile'
            />
          </Link>
        </div>
      </Profile>
    </Container>
  )
}

export default Header