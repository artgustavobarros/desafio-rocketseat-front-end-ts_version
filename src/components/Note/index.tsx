import Score from "../Score"
import Tag from "../Tag"
import { Container } from "./styles"
import { NoteProps } from "./types"

const Note = ({title, subtext}: NoteProps) =>{
  return(
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
  )
}

export default Note