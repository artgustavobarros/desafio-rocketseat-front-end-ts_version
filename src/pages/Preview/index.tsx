import Button from "../../components/Button"
import Header from "../../components/Header"
import Score from "../../components/Score"
import { By, Container, Content, Date, Description, Headline } from "./styles"
import TimerIcon from "../../assets/imgs/timer.svg?react"
import Tag from "../../components/Tag"
import { Link, useParams } from "react-router-dom"
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

  const [note, setNote] = useState(firstNote)
  const {id} = useParams()

  const date = dayjs(note.updated_at)

  const formatedDate = date.format('DD/MM/YY [às] HH:mm')

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
            <Tag title='Ficção científica'/>
            <Tag title="Drama"/>
            <Tag title='Família'/>
          </section>
          <Description>
            <p>
              {note.description}
            </p>
          </Description>
        </main>
      </Content>
    </Container>
  )
}

export default Preview