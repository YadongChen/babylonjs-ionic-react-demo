import '@babylonjs/core/Rendering/edgesRenderer';
import '@babylonjs/core/Materials/Textures/Loaders'
// https://github.com/brianzinn/react-babylonjs/issues/182
import "@babylonjs/core/Helpers/sceneHelpers";

import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { FC, Suspense } from 'react';

export const withPresetBrightDisplayScene = (
    // HOCParam: any,
) => (
    InnerComponent: FC<{ [ key: string ]: any }>
) => {
        const ComponentWithPresetBrightDisplayScene: FC<{ [ key: string ]: any }> = (props) => {

            return (
                <>
                        <arcRotateCamera
                            name="arc"
                            target={new Vector3(0, 1, 0)}
                            alpha={-Math.PI / 2}
                            beta={0.5 + Math.PI / 4}
                            radius={2}
                            minZ={0.001}
                            wheelPrecision={50}
                        />
                        <directionalLight
                            name="dl"
                            direction={new Vector3(0, -0.5, 0.5)}
                            position={new Vector3(0, 2, 0.5)}
                            >
                            {/* <shadowGenerator
                                mapSize={1024}
                                useBlurExponentialShadowMap
                                blurKernel={32}
                                shadowCastChildren
                            >
                            </shadowGenerator> */}
                            {/* <Suspense
                                    fallback={<box name="preset-bright-display-scene-loading" position={Vector3.Zero()} />}
                                >
                                    <InnerComponent {...props}></InnerComponent>
                                </Suspense> */}
                                <InnerComponent {...props}></InnerComponent>
                        </directionalLight>

                        <environmentHelper
                            options={{
                                enableGroundShadow: true /* true by default */,
                                groundYBias: 1,
                            }}
                            setMainColor={[Color3.FromHexString('#74b9ff')]}
                        />
                    </>
            );
        };
        ComponentWithPresetBrightDisplayScene.displayName = `WithPresetBrightDisplayScene(${ InnerComponent.displayName || InnerComponent.name || 'component' })`;

        return ComponentWithPresetBrightDisplayScene;
    };
