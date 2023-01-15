/// <reference types="vite/client" />
export type Available = boolean | 'showOnly' | 'notShow'

export interface Categories {
  name: string
  price: number | string
  description: string
  available: Available[]
}

export type Price = Categories[]
