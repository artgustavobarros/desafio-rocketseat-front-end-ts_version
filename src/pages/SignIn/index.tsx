import { FiLock, FiMail } from "react-icons/fi"
import { Background, Brand, Container, Content, Form } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"


const SignIn = () => {
  return(
    <Container>
      <Content>
        <Brand>RocketMovies</Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Form>
          <Input placeholder='E-mail' type='email' icon={FiMail}/>
          <Input placeholder="Senha" type='password' icon={FiLock}/>
          <Button title="Entrar" />
        </Form>
        <Button title="Criar conta" transparent/>
      </Content>
      <Background></Background>
    </Container>
  )
}

export default SignIn