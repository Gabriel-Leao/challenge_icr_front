'use client'

import { DetailedHTMLProps, FormHTMLAttributes, PropsWithChildren } from 'react'
import { useFormState } from 'react-dom'

type HTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>
type FormProps = PropsWithChildren<
  Omit<HTMLFormProps, 'action'> & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: (prevState: any, formData: FormData) => Promise<any>
  }
>

const Form = (props: FormProps) => {
  const [state, formAction] = useFormState(props.action, { error: null })
  return (
    <form
      {...props}
      action={formAction}>
      {state.error && (
        <p className="bg-red-500 text-white font-bold p-2 rounded w-[95%] max-w-[704px]">
          {Array.isArray(state.message) ? state.message[0] : state.message}
        </p>
      )}
      {state.success && (
        <p className="bg-green-500 text-white font-bold p-2 rounded w-[95%] max-w-[704px]">
          {state.message}
        </p>
      )}
      {props.children}
    </form>
  )
}

export default Form
