import { Link } from "react-router-dom"
import Score from "../Score"
import Tag from "../Tag"
import { Container } from "./styles"
import { NoteProps } from "./types"

const Note = ({title, subtext}: NoteProps) =>{
  return(
    <Link to='/preview'>
      <Container>
        <h1>{title}</h1>
        <Score score={3}/>
        <p>{subtext}</p>
        <section>
          <Tag title='Ficção científica'/>
          <Tag title='Drama'/>
          <Tag title='Família'/>
        </section>
      </Container>
    </Link>
  )
}

export default Note