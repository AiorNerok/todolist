import { forwardRef, HTMLProps } from "react"

type InputProps = HTMLProps<HTMLInputElement>

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(({ ...props }, ref) => {
    return <input ref={ref} type="text" className="border border-zinc-200 bg-zinc-100 rounded-lg focus:outline-none px-4 py-2" {...props} />
})