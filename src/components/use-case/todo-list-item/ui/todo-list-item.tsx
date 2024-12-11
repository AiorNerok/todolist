import { useStore } from "hook/useStore"
import { IStoreRecord } from "hook/useStore/types"
import { Icon } from "shared/ui/icons"


export const TodoListItem = ({ isCompleted, text, uuid }: IStoreRecord) => {
    const { toggleIsCompletedState } = useStore()

    const handlerToggleState = () => toggleIsCompletedState(uuid)
    return <li className={"py-2 flex items-center gap-3 cursor-pointer text-xl"} onClick={handlerToggleState}>
        <span>{isCompleted ? <Icon.circleCheck /> : <Icon.circle />}</span>
        <span className={isCompleted ? 'line-through' : ''}>{text}</span>
    </li>
}

