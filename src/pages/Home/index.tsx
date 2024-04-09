import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Note from "../../components/Note"
import { Container, Content, Headline } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Notes } from "../../hooks/context/types"


const Home = () =>{

  const [notes, setNotes] = useState<Notes[]>([])

  useEffect(()=>{
    async function fetchNotes(){
      const response = await api.get('/notes/')
      setNotes(response.data.notes)
    }

    fetchNotes()
  },[])

  return(
    <Container>
        <Header/>
        <Content>
          <Headline>
            <h1>Meus filmes</h1>
            <Link to='/new'>
              <Button title="Adicionar filme" variant/>
            </Link>
          </Headline>
          <section>
            {
              notes && notes.map((note) => (
                <Note
                  key={note.id}
                  title={note.title}
                  subtext={note.description}
                  score={note.rating}
                  tags={note.arr_tags}
                />
              ))
            }
          </section>
        </Content>
    </Container>
  )
}

export default Home