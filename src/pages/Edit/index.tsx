import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Mark from "../../components/Mark"
import { Container, Content, Description, Marker, Wrapper, WrapperButton } from "./styles"


const Edit = () => {

 
  return(
    <Container>
      <Header/>
      <Content>
        <main>
          <div>
            <Link to='/'>
              <Button title='Voltar' transparent arrow/>
            </Link>
          </div>
          <h1>Editar filme</h1>
          <Wrapper>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </Wrapper>
          <Description placeholder="Observações"></Description>
          <Marker>
            <p>Marcadores</p>
            <div>
              <Mark title='Novo marcador' isnew />
            </div>
          </Marker>
          <WrapperButton>
            <Button title='Salvar alterações' />
            <Button title='Excluir filme' inversed/>
          </WrapperButton>
        </main>
      </Content>
    </Container>
  )
}

export default Edit