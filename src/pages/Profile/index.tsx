import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Avatar, Container, Content, Form } from "./styles"
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi"
import { useAuth } from "../../hooks/context/context"
import { useState } from "react"


const Profile = () =>{

  const navigate = useNavigate()

  const {data, update} = useAuth()
  const {user} = data

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  function handleChange(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    navigate(-1)
    update({name, email, old_password:oldPassword, new_password: newPassword})
  }

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
          <Input icon={FiUser} placeholder= {name} onChange={(e) => setName(e.target.value)}/>
          <Input icon={FiMail} placeholder= {email} onChange={(e) => setEmail(e.target.value)}/>
          <Input icon={FiLock} placeholder="Senha atual" type="password" onChange={(e) => setOldPassword(e.target.value)}/>
          <Input icon={FiLock} placeholder="Nova senha" type="password" onChange={(e) => setNewPassword(e.target.value)}/>
          <Button title="Salvar" onClick={(e) => handleChange(e)}/>
        </Form>
      </Content>
    </Container>
  )
}

export default Profile