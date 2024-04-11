import Button from "../../components/Button"
import Header from "../../components/Header"
import Score from "../../components/Score"
import { By, Container, Content, Date, Description, Headline, Wrapper } from "./styles"
import TimerIcon from "../../assets/imgs/timer.svg?react"
import Tag from "../../components/Tag"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import dayjs from "dayjs"
import { Note } from "../../hooks/context/types"

const firstNote: Note = {
  id: '',
  title: '',
  description: '',
  rating: '',
  arr_tags: [],
  created_at: '',
  updated_at: '',
  user_id: ''
}

const Preview = () =>{

  const navigate = useNavigate()

  const [note, setNote] = useState(firstNote)
  const {id} = useParams()

  const date = dayjs(note.updated_at)

  const formatedDate = date.format('DD/MM/YY [às] HH:mm')

  function moveToEditPage(){
    navigate(`/edit/${id}`)
  }

  async function deleteNote(){
    navigate('/')
    await api.delete(`/notes/${id}`)
  }

  useEffect(() =>{
    async function handlePreview(){
      const response = await api.get(`/notes/findbyid?id=${id}`)
      setNote(response.data.note)
    }
    handlePreview()
  },[id])

  return(
    <Container>
      <Header/>
      <Content>
        <main>
          <Link to='/'>
            <Button title='Voltar' transparent arrow/>
          </Link>
          <Headline>
            <h1>{note.title}</h1>
            <Score score={Number(note.rating)} preview/>
            <By>
              <img  
                src='https://avatars.githubusercontent.com/u/49030804?v=4'
                alt='avatar profile'
              />
              <p>Por Rodrigo Gonçalves</p>
            </By>
            <Date>
              <TimerIcon/>
              <p>{formatedDate}</p>
            </Date>
          </Headline>
          <section>
            {
              note.arr_tags.map((tag) => (
                <Tag 
                  key={String(tag)}
                  title={tag}
                />
              ))
            }
          </section>
          <Description>
            <p>
              {note.description}
            </p>
          </Description>
          <Wrapper>
            <Button title='Editar filme' onClick={moveToEditPage}/>
            <Button title='Excluir filme' inversed onClick={deleteNote}/>
        </Wrapper>
        </main>
      </Content>
    </Container>
  )
}

export default Preview