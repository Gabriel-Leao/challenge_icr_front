export interface Book {
  id: string
  title: string
  description: string
  author: string
  image: string | null
  categories?: []
  favorites?: {
    id: string
    book_id: string | null
  }[]
}
