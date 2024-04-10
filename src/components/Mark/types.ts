import { ComponentPropsWithoutRef } from "react"

export interface MarkProps extends ComponentPropsWithoutRef<'input'> {
  title: string
  isnew?:boolean
  onClick?: () => void
}

export interface MarkStyledProps{
  $isnew?: boolean
}