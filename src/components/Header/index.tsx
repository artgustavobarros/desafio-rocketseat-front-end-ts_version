import { Container, Logo, Profile, Search } from "./styles"

const Header = () =>{
  return(
    <Container>
      <Logo>
        RocketMovies
      </Logo>
      <Search placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <button>Sair</button>
        </div>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/49030804?v=4'
            alt='avatar profile'
          />
        </div>
      </Profile>
    </Container>
  )
}

export default Header