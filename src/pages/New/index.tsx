import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Mark from "../../components/Mark"
import { Container, Content, Description, Marker, Wrapper, WrapperButton } from "./styles"
import { useState } from "react"
import { useAuth } from "../../hooks/context/context"

const New = () => {

  const navigate = useNavigate()
  const {addNote} = useAuth()

  const [titleNote, setTitleNote] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0)

  const [marks, setMarks] = useState<string[]>([])
  const [title, setTitle] = useState('')

  function handleNewMark(newMark: string){
    setMarks((prev) => [...prev, newMark])
    setTitle('')
  }

  function deleteMark(title: string){
    const filteredMarks = marks.filter((mark) => mark !== title)
    setMarks(filteredMarks)
  }

  function handleAddNote(){
    addNote({title: titleNote, description, rating, arr_tags: marks})
    navigate(-1)
  }

  return(
    <Container>
      <Header/>
      <Content>
        <main>
          <div>
            <Link to='/'>
              <Button title='Voltar' transparent arrow/>
            </Link>
          </div>
          <h1>Novo filme</h1>
          <Wrapper>
            <Input placeholder="Título" onChange={(e) => setTitleNote(e.target.value)}/>
            <Input placeholder="Sua nota(de 0 a 5)" onChange={(e) => setRating(Number(e.target.value))}/>
          </Wrapper>
          <Description placeholder="Observações" onChange={(e) => setDescription(e.target.value)}></Description>
          <Marker>
            <p>Marcadores</p>
            <div>
              {
                marks && marks.map((mark, index) => <Mark key={String(index)} title={mark} onClick={() => deleteMark(mark)}/>)
              }
              <Mark title='Novo marcador' onChange={(e) => setTitle(e.target.value)} isnew onClick={() => handleNewMark(title)}/>
            </div>
          </Marker>
          <WrapperButton>
            <Button title='Salvar filme' onClick={handleAddNote}/>
          </WrapperButton>
        </main>
      </Content>
    </Container>
  )
}

export default New