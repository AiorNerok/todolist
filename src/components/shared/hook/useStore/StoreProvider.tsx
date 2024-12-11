import { PropsWithChildren, useEffect, useState } from 'react';
import { filterEnum, IStoreRecord, newTaskType } from './types';
import { StoreContext } from './StoreContext';

export const StoreProvider = ({ children }: PropsWithChildren) => {
    const [store, setStore] = useState<IStoreRecord[]>([]);
    const [countTask, setCountTask] = useState(store.length)
    const [filterType, setFilterType] = useState<filterEnum>(filterEnum.all);

    useEffect(() => {
        setCountTask(store.length)
    }, [store])

    const createNewTask = (text: newTaskType): void => {
        const newTask: IStoreRecord = {
            text,
            uuid: crypto.randomUUID(),
            isCompleted: false,
        };
        setStore(prev => [...prev, newTask]);
    };

    const toggleIsCompletedState = (uuid: string): void => {
        setStore(prev => prev.map(task => (task.uuid === uuid ? { ...task, isCompleted: !task.isCompleted } : task)));
    };

    const clearCompletedTask = () => {
        setStore(prev => prev.filter(task => !task.isCompleted));
    };


    return (
        <StoreContext.Provider value={{ store, countTask, filterType, setFilterType, createNewTask, toggleIsCompletedState, clearCompletedTask }} >
            {children}
        </StoreContext.Provider>
    );
};
