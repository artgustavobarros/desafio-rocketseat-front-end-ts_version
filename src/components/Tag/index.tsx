import { Container } from "./styles"
import { TagProps } from "./types"

const Tag = ({title}: TagProps) =>{
  return(
    <Container>{title}</Container>
  )
}

export default Tag