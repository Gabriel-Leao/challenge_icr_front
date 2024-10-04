import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type MaskedInputProps = InputHTMLAttributes<HTMLInputElement> & {
  mask?: string
  label: string
}

export type inputProps = DetailedHTMLProps<MaskedInputProps, HTMLInputElement>
