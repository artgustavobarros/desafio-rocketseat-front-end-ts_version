import { ComponentPropsWithoutRef } from "react"

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  title: string
  variant?: boolean
  transparent?: boolean
  arrow?: boolean
  inversed?: boolean
}


export interface ButtonStyledProps {
  $transparent?: boolean
  $inversed?: boolean
}