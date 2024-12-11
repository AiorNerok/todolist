import { useStore } from 'hook/useStore'

export const FooterTemplate = () => {
    const { countTask } = useStore()
    return (
        <div className="flex justify-start items-center">
            <p className='m-0'>{countTask ? `${countTask} items left` : 'empty'} </p>
        </div>
    )
}