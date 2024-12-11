import { useStore } from "shared/hook/useStore"
import { filterEnum } from "shared/hook/useStore/types"
import { Button } from "shared/ui/button"

export const FilterAction = () => {
    const { setFilterType } = useStore()
    return (
        <div className="flex gap-2 items-center">
            <Button onClick={() => setFilterType(filterEnum.all)}>All</Button>
            <Button onClick={() => setFilterType(filterEnum.active)}>Active</Button>
            <Button onClick={() => setFilterType(filterEnum.completed)}>Completed</Button>
        </div>
    )
}