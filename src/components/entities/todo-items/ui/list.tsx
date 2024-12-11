import { HTMLProps, PropsWithChildren } from "react"

type ListProps = HTMLProps<HTMLUListElement> & PropsWithChildren

export const List = ({ children, ...props }: ListProps) => {
    return (
        <ul {...props}>
            {children}
        </ul>
    )
}