'use client'

import { useFormStatus } from 'react-dom'

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Spinner from '@/components/Spinner'

type SubmitProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const SubmitButton = (props: SubmitProps) => {
  const status = useFormStatus()
  const { disabled, ...otherProps } = props
  return (
    <button
      {...otherProps}
      disabled={status.pending || disabled}>
      {status.pending ? <Spinner /> : <>{props.children}</>}
    </button>
  )
}

export default SubmitButton
