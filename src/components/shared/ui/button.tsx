import { ButtonHTMLAttributes, PropsWithChildren } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren

export const Button = ({ children, ...props }: ButtonProps) => <button type="button" {...props}>{children}</button>