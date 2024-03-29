import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Mark from "../../components/Mark"
import { Container, Content, Description, Marker, Wrapper } from "./styles"

const New = () => {
  return(
    <Container>
      <Header/>
      <Content>
        <main>
          <div>
            <Button title='Voltar' transparent arrow/>
          </div>
          <h1>Novo filme</h1>
          <Wrapper>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota(de 0 a 5)"/>
          </Wrapper>
          <Description placeholder="Observações"></Description>
          <Marker>
            <p>Marcadores</p>
            <div>
              <Mark title='React'/>
              <Mark title='Novo marcador' isnew/>
            </div>
          </Marker>
          <Wrapper>
            <Button title='Excluir filme' inversed/>
            <Button title='Salvar alterações'/>
          </Wrapper>
        </main>
      </Content>
    </Container>
  )
}

export default New