import { Container} from "./styles"
import { InputsProps } from "./types"

const Input = ({...rest}: InputsProps) =>{
  return(
    <Container{...rest}/>
  )
}

export default Input