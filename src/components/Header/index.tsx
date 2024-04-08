import { Link, useNavigate } from "react-router-dom"
import Input from "../Input"
import { Container, Logo, Profile } from "./styles"
import { useAuth } from "../../hooks/context/context"

const Header = () =>{
  const navigate = useNavigate()
  const {signOut} = useAuth()

  function handleSignOut(){
    navigate('/')
    signOut()
  }

  return(
    <Container>
        <Logo to='/'>
          RocketMovies
        </Logo>
      <Input placeholder="Pesquisar pelo título"/>
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