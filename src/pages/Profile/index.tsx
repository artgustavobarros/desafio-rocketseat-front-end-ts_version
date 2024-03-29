import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Avatar, Container, Content, Form } from "./styles"
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi"


const Profile = () =>{
  return(
    <Container>
      <header>
        <Link to='/'>
          <Button title='Voltar' arrow transparent/>
        </Link>
      </header>
      <Content>
        <Form>
          <Avatar>
            <img
              src='https://avatars.githubusercontent.com/u/49030804?v=4'
              alt='avatar profile'
            />
            <label htmlFor="avatar">
              <FiCamera/>
              <input
                id='avatar'
                type='file'
              />
            </label>
          </Avatar>
          <Input icon={FiUser} placeholder="Nome"/>
          <Input icon={FiMail} placeholder="Email"/>
          <Input icon={FiLock} placeholder="Senha atual" type="password"/>
          <Input icon={FiLock} placeholder="Nova senha" type="password"/>
          <Button title="Salvar"/>
        </Form>
      </Content>
    </Container>
  )
}

export default Profile