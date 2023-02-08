import { Engine, Scene, SceneEventArgs } from 'react-babylonjs';
import { FC, useEffect, useRef } from 'react';

export const withSceneContainer = (

) => (
    InnerComponent: FC<{ [ key: string ]: any }>
) => {
    const ComponentWithSceneContainer: FC<{ [ key: string ]: any }> = (props) => {

        //  Canvas Need Init Resize For Mobile Device
        const handleOnSceneMount = (event: SceneEventArgs) => {
            event.scene?.getEngine().resize();
        };

        return(
            <Engine antialias={true} adaptToDeviceRatio={true} canvasId="babylon-js">
                <Scene onSceneMount={handleOnSceneMount}>
                    <InnerComponent {...props}></InnerComponent>
                </Scene>
            </Engine>
        );
    };
    ComponentWithSceneContainer.displayName = `WithSceneContainer(${ InnerComponent.displayName || InnerComponent.name || 'component' })`;

    return ComponentWithSceneContainer;
};
