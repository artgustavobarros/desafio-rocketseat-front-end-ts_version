import { Container } from "./styles"
import CloseIcon from '../../assets/imgs/close.svg?react'
import AddIcon from '../../assets/imgs/add.svg?react'
import { MarkProps } from "./types"

const Mark = ({title, isnew=false, onClick, ...rest}: MarkProps) =>{
  return(
    <Container $isnew={isnew} >
      <input placeholder={title} {...rest}/>
      <button onClick={onClick}>
      {
        isnew? <AddIcon/> : <CloseIcon/>
      }
      </button>
    </Container>
  )
}

export default Mark