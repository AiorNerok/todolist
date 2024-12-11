import { PropsWithChildren } from "react"

type ButtonProps = {

} & PropsWithChildren

export const Button = ({ children }: ButtonProps) => <button>{children}</button>