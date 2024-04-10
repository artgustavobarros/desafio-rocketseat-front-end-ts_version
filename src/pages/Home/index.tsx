import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Note from "../../components/Note"
import { Container, Content, Headline } from "./styles"
import { useAuth } from "../../hooks/context/context"


const Home = () =>{

  const {notes} = useAuth()


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