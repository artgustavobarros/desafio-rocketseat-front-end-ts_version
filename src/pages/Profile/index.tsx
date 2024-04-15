import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Avatar, Container, Content, Form } from "./styles"
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi"
import { useAuth } from "../../hooks/context/context"
import { useState } from "react"
import { api } from "../../services/api"
import avatarPlaceholder from '../../assets/imgs/avatar_placeholder.svg'


const Profile = () =>{

  const navigate = useNavigate()

  const {data, update, avatarUpdate} = useAuth()
  const {user} = data

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const avatarURL = user.avatar? `${api.defaults.baseURL}/users/img/${user.avatar}`: avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState<File|null>(null)


  function handleChange(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    navigate(-1)
    update({name, email, old_password:oldPassword, new_password: newPassword})
    if (avatarFile){
      avatarUpdate(avatarFile)
    }
  }

  function handleAvatarUpdate(e: React.ChangeEvent<HTMLInputElement>){
    if (!e.target.files) return;
    const file = e.target.files[0]
    setAvatarFile(file)
    const imgPreview = URL.createObjectURL(file)
    setAvatar(imgPreview)
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
              src={avatar}
              alt='avatar profile'
            />
            <label htmlFor="avatar">
              <FiCamera/>
              <input
                id='avatar'
                type='file'
                onChange={handleAvatarUpdate}
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