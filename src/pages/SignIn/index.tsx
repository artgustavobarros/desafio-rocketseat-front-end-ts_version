import { FiLock, FiMail } from "react-icons/fi"
import { Background, Brand, Container, Content, Form } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/context/context"


const SignIn = () => {

  const {signIn} = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn(){
    signIn({email, password})
  }

  return(
    <Container>
      <Content>
        <Brand>RocketMovies</Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Form>
          <Input 
            placeholder='E-mail' 
            type='email' 
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Senha" 
            type='password' 
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            title="Entrar"
            onClick={handleSignIn}
          />
        </Form>
        <Link to='/register'>
          <Button title="Criar conta" transparent/>
        </Link>
      </Content>
      <Background></Background>
    </Container>
  )
}

export default SignIn

