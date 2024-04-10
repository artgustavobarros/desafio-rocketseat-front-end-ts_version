import { useNavigate } from "react-router-dom"
import Score from "../Score"
import Tag from "../Tag"
import { Container } from "./styles"
import { NoteProps } from "./types"

const Note = ({title, subtext, score, tags, id}: NoteProps) =>{

  const navigate = useNavigate()

  function handleNavigate(){
    navigate(`/preview/${id}`)
  }

  return(
      <Container>
        <button onClick={handleNavigate}>
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
        </button>
      </Container>
  )
}

export default Note