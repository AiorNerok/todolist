export type newTaskType = string;

export enum filterEnum {
    'all',
    'active',
    'completed',
}

export interface IStoreRecord {
    uuid: string;
    text: newTaskType;
    isCompleted: boolean;
}

export interface IStoreContext {
    store: IStoreRecord[];
    countTask: number;
    filterType: filterEnum;
    setFilterType: (type: filterEnum) => void;
    createNewTask: (text: newTaskType) => void;
    toggleIsCompletedState: (uuid: string) => void;
    clearCompletedTask: () => void;
}
