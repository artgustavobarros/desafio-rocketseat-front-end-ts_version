import { Container } from "./styles"
import CloseIcon from '../../assets/imgs/close.svg?react'
import AddIcon from '../../assets/imgs/add.svg?react'
import { MarkProps } from "./types"

const Mark = ({title, isnew=false}: MarkProps) =>{
  return(
    <Container $isnew={isnew}>
      {title}
      {
        isnew? <AddIcon/> : <CloseIcon/>
      }
    </Container>
  )
}

export default Mark