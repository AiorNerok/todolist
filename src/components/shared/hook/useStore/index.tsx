import { useContext } from "react";
import { StoreContext } from './StoreContext'
import type { IStoreContext } from './types'

export const useStore = (): IStoreContext => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};
