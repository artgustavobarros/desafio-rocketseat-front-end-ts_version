import { Link, useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Mark from "../../components/Mark"
import { Container, Content, Description, Marker, Wrapper, WrapperButton } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
// import { Note } from "../../hooks/context/types"
import { useAuth } from "../../hooks/context/context"

// const firstNote: Note = {
//   id: '',
//   title: '',
//   description: '',
//   rating: '',
//   arr_tags: [],
//   created_at: '',
//   updated_at: '',
//   user_id: ''
// }

const Edit = () => {

  const { id = '' } = useParams()
  const navigate = useNavigate()
  const {updateNote} = useAuth()

  // const [data, setData] = useState<Note>(firstNote)
  const [newTag, setNewTag] = useState<string>('Novo marcador')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState<number>(0)
  const [tags, setTags] = useState<string[]>([])

  function addTag(){
    setTags((prev) => [...prev, newTag])
  }

  function deleteTag(name: string){
    const filteredTags = tags.filter((tag) => tag !== name)
    setTags(filteredTags)
  }

  function handleUpdate(){
    navigate(-1)
    updateNote({id, title, description, rating, arr_tags: tags})
  }

  async function deleteNote(){
    navigate(-1)
    await api.delete(`/notes/${id}`)
  }
   
  useEffect(() =>{
    async function fetch() {
      const response = await api.get(`/notes?id=${id}`)
      const note = response.data.notes[0]
      // setData(note)
      setTitle(note.title)
      setDescription(note.description)
      setRating(note.rating)
      setTags(note.arr_tags)
    }
    fetch()
  },[id])


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
          <h1>Editar filme</h1>
          <Wrapper>
            <Input placeholder={title} onChange={(e) => setTitle(e.target.value)}/>
            <Input placeholder={String(rating)} onChange={(e) => setRating(Number(e.target.value))} />
          </Wrapper>
          <Description placeholder={description} onChange={(e) => setDescription(e.target.value)}></Description>
          <Marker>
            <p>Marcadores</p>
            <div>
            {
              tags && tags.map((tag) => (
                <Mark
                  key={String(tag)}
                  title={tag}
                  onClick={() => deleteTag(tag)}
                />
              ))
            }
              <Mark title={newTag} isnew onChange={(e) => setNewTag(e.target.value)} onClick={addTag} />
            </div>
          </Marker>
          <WrapperButton>
            <Button title='Salvar alterações' onClick={handleUpdate}/>
            <Button title='Excluir filme' inversed onClick={deleteNote}/>
          </WrapperButton>
        </main>
      </Content>
    </Container>
  )
}

export default Edit