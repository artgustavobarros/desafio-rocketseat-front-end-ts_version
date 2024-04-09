import { Link } from "react-router-dom"
import Score from "../Score"
import Tag from "../Tag"
import { Container } from "./styles"
import { NoteProps } from "./types"

const Note = ({title, subtext, score, tags}: NoteProps) =>{
  return(
    <Link to='/preview'>
      <Container>
        <h1>{title}</h1>
        <Score score={Number(score)}/>
        <p>{subtext}</p>
        <section>
          {
            tags && tags.map((tag, index) => (
              <Tag 
                key={String(index)}
                title={tag}
              />
            ))
          }
        </section>
      </Container>
    </Link>
  )
}

export default Note