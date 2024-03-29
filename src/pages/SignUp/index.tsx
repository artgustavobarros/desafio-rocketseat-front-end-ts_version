import { FiLock, FiMail, FiUser } from "react-icons/fi"
import { Background, Brand, Container, Content, Form } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"


const SignUp = () => {
  return(
    <Container>
      <Content>
        <Brand>RocketMovies</Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Form>
          <Input placeholder='Nome' type='text' icon={FiUser}/>
          <Input placeholder='E-mail' type='email' icon={FiMail}/>
          <Input placeholder="Senha" type='password' icon={FiLock}/>
          <Button title="Cadastrar" />
        </Form>
        <Button title="Voltar para o login" transparent arrow/>
      </Content>
      <Background></Background>
    </Container>
  )
}

export default SignUp