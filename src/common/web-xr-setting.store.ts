import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

export enum WebXRMode {
    AR = 'AR',
    VR = 'VR',
}

export interface WebXRSettingStore {
    currMode: WebXRMode,
    setXRMode: (newMode: WebXRMode) => void;
};

export const useWebXRSettingStore = create<WebXRSettingStore>()(
    devtools((set) => ({
        currMode: WebXRMode.VR,
        setXRMode: (newMode: WebXRMode) => {
            set({ currMode: newMode });
        },
    })),
);
