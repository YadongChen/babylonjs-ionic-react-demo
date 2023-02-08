// Enable GLTF/GLB loader for loading controller models from WebXR Input registry
import '@babylonjs/loaders/glTF'
// Without this next import, an error message like this occurs loading controller models:
//  Build of NodeMaterial failed" error when loading controller model
//  Uncaught (in promise) Build of NodeMaterial failed: input rgba from block
//  FragmentOutput[FragmentOutputBlock] is not connected and is not optional.
import '@babylonjs/core/Materials/Node/Blocks'

import React, { FC, useEffect } from 'react';
import { WebXRBackgroundRemover, WebXRFeatureName } from '@babylonjs/core/XR'
import { WebXRMode, useWebXRSettingStore } from '../../common/web-xr-setting.store';

import { WebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience.js'
import { useScene } from 'react-babylonjs';

export const withWebXR = (
    // HOCParam: any,
) => (
    InnerComponent: FC<{ [ key: string ]: any }>
) => {
    const ComponentWithWebXR: FC<{ [ key: string ]: any }> = (props) => {

        const { currMode } = useWebXRSettingStore();

        const scene = useScene();
        useEffect(() => {
            console.log('test1');
            console.log(scene);
            if (scene) {
                const xrExperience = async () => {
                    // await scene?.createDefaultXRExperienceAsync({
                    //     uiOptions: {
                    //         sessionMode: currMode === WebXRMode.VR ? 'immersive-vr' : 'immersive-ar',
                    //     },
                    // });
                    WebXRDefaultExperience.CreateAsync(scene, {
                        uiOptions: {
                            sessionMode: currMode === WebXRMode.VR ? 'immersive-vr' : 'immersive-ar',
                        },
                        optionalFeatures: true,
                    }).then((webXRDefaultExperience) => {
                        webXRDefaultExperience.baseExperience?.featuresManager.enableFeature(WebXRBackgroundRemover);
                    })
                };
                xrExperience();
            }
        }, [currMode, scene]);

        return(
            <>
                <InnerComponent {...props}></InnerComponent>
            </>
        );
    };
    ComponentWithWebXR.displayName = `WithWebXR(${ InnerComponent.displayName || InnerComponent.name || 'component' })`;

    return ComponentWithWebXR;
};
