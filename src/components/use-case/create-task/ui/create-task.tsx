import { Input } from "entities/input"
import { useStore } from "hook/useStore"
import { KeyboardEvent, useRef } from "react"

export const CreateTask = () => {
    const { createNewTask } = useStore()
    const inputRef = useRef<HTMLInputElement>(null)

    const handlerCreateTask = ({ key }: KeyboardEvent<HTMLInputElement>) => {
        const textNewTask = inputRef.current?.value;

        if (key === 'Enter' && textNewTask) {
            createNewTask(textNewTask.trim())
            inputRef.current.value = ''
        }
    }

    return (
        <Input ref={inputRef} placeholder="What needs to be done?" onKeyDown={handlerCreateTask} />
    )
}