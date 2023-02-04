import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

export enum SupportedModelType {
    gltf = 'gltf',
    glb = 'glb',
    obj = 'obj',
    fbx = 'fbx',
    max = 'max',
};

export interface ModelItemEntity {
    name: string;
    description?: string;
    modelFileURLPath: string;
    modelFileName: string;
    modelType: SupportedModelType;
    modelPreviewImgPath?: string;
    modelImgTexturePath?: string;
};

export interface SelectedModelItemsStore {
    selectedModelItems: ModelItemEntity[];
    selectModelItem: (newItem: ModelItemEntity) => void;
    deselectModelItem: (needDeselectModelItemName: string) => void;
}

export const useSelectedModelItemsStore = create<SelectedModelItemsStore>()(
    devtools((set) => ({
        selectedModelItems: [],
        selectModelItem: (newItem: ModelItemEntity) => {
            set((prevState) => ({ selectedModelItems: [...prevState.selectedModelItems, newItem] }));
        },
        deselectModelItem: (needDeselectModelItemName: string) => {
            set((prevState) => {
                if (prevState.selectedModelItems?.length > 0) {
                    return { selectedModelItems: prevState.selectedModelItems.filter((singleSelectedModelItem) => singleSelectedModelItem?.name !== needDeselectModelItemName) };
                }
                return { selectedModelItems: [] };
            });
        },
    })),
);