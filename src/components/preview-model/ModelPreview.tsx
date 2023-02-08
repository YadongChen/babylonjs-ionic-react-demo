import { ILoadedModel, Model } from 'react-babylonjs';
import { ModelItemEntity, useSelectedModelItemsStore } from '../../common/selected-model-item.store';
import React, { FC, useMemo } from 'react';

import { PointerDragBehavior } from '@babylonjs/core/Behaviors/Meshes/pointerDragBehavior';
import { Vector3 } from '@babylonjs/core/Maths/math';

export interface ModelPreviewProps {

}

export const ModelPreview: FC<ModelPreviewProps> = (props) => {

    const { selectedModelItems } = useSelectedModelItemsStore();

    const pointerDragBehavior = useMemo(() => {
        return (
            new PointerDragBehavior({})
        );
    }, []);

    const handleModelLoaded = (modelBizData: ModelItemEntity) => (event: ILoadedModel) => {
        event.meshes?.forEach((singleMesh) => {
            singleMesh.addBehavior(pointerDragBehavior);
        });
    };

    return (
        <>
            {selectedModelItems?.map((singleSelectedItem, mapIndex) => {
                return (
                    <Model
                        key={`preview-selected-pc-part-single-${ singleSelectedItem.name }`}
                        name={singleSelectedItem.name}
                        rootUrl={singleSelectedItem.modelFileURLPath}
                        sceneFilename={singleSelectedItem.modelFileName}
                        scaleToDimension={1}
                        position={new Vector3(0 + mapIndex, -2, 0)}
                        onModelLoaded={handleModelLoaded(singleSelectedItem)}
                        // addBehavior={pointerDragBehavior}
                    />
                );
            })}
        </>
    );
};
ModelPreview.displayName = 'ModelPreview';
