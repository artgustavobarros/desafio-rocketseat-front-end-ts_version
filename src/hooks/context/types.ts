import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode
}

export interface SignInProps{
  email: string
  password: string
}

export interface UpdateProps{
  name?: string
  email?: string
  old_password?: string
  new_password?: string
}

export interface UpdateNotesProps{
  id: string
  title?: string
  description?: string
  rating?: number
  arr_tags?: string[]
}

export interface AddNotesProps{
  title: string
  description: string
  rating: number
  arr_tags: string[]
}

export interface Note{
  id: string
  title: string
  description: string
  rating: string
  arr_tags: string[]
  created_at: string
  updated_at: string
  user_id: string
}

export const firstNote: Note = {
  id: '',
  title: '',
  description: '',
  rating: '',
  arr_tags: [],
  created_at: '',
  updated_at: '',
  user_id: ''
}

export interface FetchNotesByTitleProps{
  title: string
}

export interface GetNoteProps{
  id: string
}

export interface AvatarUpdateProps{
  avatarFile: File
}

export interface AuthContextProps{
  data: {
    user: {
      avatar?: string
      created_at: string
      updated_at: string
      id: string
      email: string
      password: string
      name: string
    },
    token: string
  }
  notes: Note[]
  note: Note
  signIn: ({email, password}: SignInProps) => void
  signOut: () => void 
  update: ({name, email, old_password, new_password}: UpdateProps) => void
  avatarUpdate: (avatarFile: File) => void
  getNote: ({id}: GetNoteProps) => void
  updateNote: ({id, title, description, rating, arr_tags}:UpdateNotesProps) => void
  addNote: ({title, description, rating, arr_tags}: AddNotesProps) => void
  fetchNotesByTitle: ({title}: FetchNotesByTitleProps) => void
}
