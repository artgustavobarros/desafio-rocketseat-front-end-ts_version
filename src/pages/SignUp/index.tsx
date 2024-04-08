import { FiLock, FiMail, FiUser } from "react-icons/fi"
import { Background, Brand, Container, Content, Form } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"
import { api } from "../../services/api"
import { Link, useNavigate } from "react-router-dom"


const SignUp = () => {

  // ENTENDER PQ PRECISA DE DUAS REQUISIÇÕES
  // FAZER UM NAVIGATE PARA O LOGIN QUANDO O CADASTRO FOR BEM SUCESSEDIDO

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleSignUp(){
    try{
      await api.post('/users/register', {name, email, password})
      navigate('/')
    }catch(error){
      if(error instanceof Error){
        alert(error.message)
      }
    }
  }

  return(
    <Container>
      <Content>
        <Brand>RocketMovies</Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Form>
          <Input placeholder='Nome' type='text' icon={FiUser} onChange={(e) => setName(e.target.value)}/>
          <Input placeholder='E-mail' type='email' icon={FiMail} onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Senha" type='password' icon={FiLock} onChange={(e) => setPassword(e.target.value)}/>
          <Button title="Cadastrar" onClick={handleSignUp}/>
        </Form>
        <Link to='/'>
          <Button title="Voltar para o login" transparent arrow/>
        </Link>
      </Content>
      <Background></Background>
    </Container>
  )
}

export default SignUp