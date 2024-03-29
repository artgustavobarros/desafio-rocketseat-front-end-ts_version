import { Container} from "./styles"
import { InputsProps } from "./types"

const Input = ({icon: Icon, ...rest}: InputsProps) =>{
  return(
    <Container>
      {
        Icon && <Icon size={20}/>
      }
      <input {...rest}/>
    </Container>
  )
}

export default Input