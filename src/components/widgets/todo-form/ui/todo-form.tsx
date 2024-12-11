import { FooterTemplate } from "entities/footer-template"
import { List } from "entities/todo-items"
import { useStore } from "hook/useStore"
import { CreateTask } from "use-case/create-task"
import { FilterAction } from "use-case/filter-action/ui/filter-action"
import { TodoListItem } from "use-case/todo-list-item"

export const TodoForm = () => {
    const { store, filterType } = useStore();
    return (
        <div>
            <CreateTask />
            {filterType}
            <List>
                {
                    store.map((task) => <TodoListItem key={task.uuid} {...task} />)
                }
            </List>
            <FilterAction />
            <FooterTemplate />
        </div>
    )
}