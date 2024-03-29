import { ComponentPropsWithoutRef} from "react";
import { IconType } from "react-icons";

export interface InputsProps extends ComponentPropsWithoutRef<'input'>{
  icon?:IconType
} 