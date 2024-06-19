'use client'

import { useFormStatus } from 'react-dom'

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

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
      disabled={status.pending || disabled}
    />
  )
}

export default SubmitButton
