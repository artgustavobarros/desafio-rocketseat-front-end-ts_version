import { Background, Brand, Container, Content} from "./styles"
import Button from "../../components/Button"
import { Link } from "react-router-dom"


const Page404 = () => {
  return(
    <Container>
      <Background/>
      <Content>
        <Brand>Page 404</Brand>
        <Link to='/'>
          <Button title="Voltar" transparent arrow/>
        </Link>
      </Content>
    </Container>
  )
}

export default Page404