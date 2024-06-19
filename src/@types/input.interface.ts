import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string
  label: string
}

export type inputProps = DetailedHTMLProps<MaskedInputProps, HTMLInputElement>
