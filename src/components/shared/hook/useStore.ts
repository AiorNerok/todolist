import { useState } from 'react';

interface IStoreRecord {
    uuid: string;
    text: string;
    isCompleted: boolean;
}

export const useStore = () => {
    const [store, setStore] = useState<IStoreRecord[]>([]);

    const createTask = ({ text }: Pick<IStoreRecord, 'text'>): void => {
        const newTask: IStoreRecord = {
            uuid: crypto.randomUUID(),
            text,
            isCompleted: false,
        };

        setStore(prev => [...prev, newTask]);
    };

    const toggleIsCompletedState = ({ uuid }: Pick<IStoreRecord, 'uuid'>): void => {
        const task = store.find(({ uuid: uuidTask }) => uuidTask === uuid);

        if (task) {
            setStore(prev => [...prev, { ...task, isCompleted: !task?.isCompleted }]);
        }
    };

    const clearCompletedTask = () => {
        const clearedTasks = store.filter(task => !task.isCompleted);
        setStore(clearedTasks);
    };

    return {
        store,
        createTask,
        toggleIsCompletedState,
        clearCompletedTask,
    };
};
