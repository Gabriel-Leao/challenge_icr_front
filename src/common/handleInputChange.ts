import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const handleInputChange = (
  e: ChangeEvent<HTMLInputElement>,
  formData: { [key: string]: string },
  setFormData: Dispatch<SetStateAction<{ [key: string]: string }>>
) => {
  const { id } = e.target
  let value = e.target.value
  if (id == 'birth') {
    value = value.replace(/\D/g, '')

    if (value.length > 8) {
      value = value.slice(0, 8)
    }

    if (value.length > 4) {
      value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2')
    }
  }
  setFormData({
    ...formData,
    [id]: value
  })
}
