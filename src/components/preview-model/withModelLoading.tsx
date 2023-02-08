import { FC, Suspense } from 'react';

import { Control } from '@babylonjs/gui/2D/controls/control'
import { Vector3 } from '@babylonjs/core/Maths/math';

export const withModelLoading = (
    // HOCParam: any,
) => (
    InnerComponent: FC<{ [ key: string ]: any }>
) => {
    const ComponentWithModelLoading: FC<{ [ key: string ]: any }> = (props) => {

        return(
            <Suspense
                fallback={
                    <rectangle
                        key={`with-model-loading-gui-rectangle`}
                        name={`with-model-loading-gui-rectangle-name`}
                        background="black"
                        height="30px"
                        alpha={0.5}
                        width="100px"
                        cornerRadius={20}
                        thickness={1}
                        linkOffsetY={30}
                        // ref={refLookup[i].label!}
                        verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                        top={0}
                        >
                        <textBlock
                            name={`with-model-loading-gui-rectangle-text-name`}
                            text={`Loading`}
                            color="Black"
                        />
                    </rectangle>
                }
            >
                <InnerComponent {...props}></InnerComponent>
            </Suspense>
        );
    };
    ComponentWithModelLoading.displayName = `WithModelLoading(${ InnerComponent.displayName || InnerComponent.name || 'component' })`;

    return ComponentWithModelLoading;
};
