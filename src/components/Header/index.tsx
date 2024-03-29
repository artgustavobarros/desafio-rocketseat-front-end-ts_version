import { Link } from "react-router-dom"
import Input from "../Input"
import { Container, Logo, Profile } from "./styles"

const Header = () =>{
  return(
    <Container>
      <Link to='/'>
        <Logo>
          RocketMovies
        </Logo>
      </Link>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <button>Sair</button>
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