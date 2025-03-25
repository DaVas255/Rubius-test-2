import { Dayjs } from 'dayjs'

export interface IProject {
  id: number
  name: string
}

export interface IReport {
  id?: number
  date: Dayjs | null
  project: string
  comments: string
}
