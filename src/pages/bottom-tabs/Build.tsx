import "./Build.css";

import {
    CheckboxChangeEventDetail,
    CheckboxCustomEvent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCheckbox,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { ModelItemEntity, SupportedModelType, useSelectedModelItemsStore } from "../../common/selected-model-item.store";

const DemoTestDiffModelTypeModelItems: ModelItemEntity[] = [
    {
        name: '.obj-type-test-item',
        description: '.obj type test item',
        modelFileURLPath: '/babylonjs-ionic-react-demo/assets/demo-model/obj-type/',
        modelFileName: 'obj-type-model.obj',
        modelType: SupportedModelType.obj,
        modelPreviewImgPath: '/babylonjs-ionic-react-demo/assets/demo-model/obj-type/obj-type-model.jpg',
        modelImgTexturePath: '/babylonjs-ionic-react-demo/assets/demo-model/obj-type/obj-type-model-image-texture.jpg',
    },
    {
        name: '.fbx-type-test-item',
        description: '.fbx type test item, need to process a lot of binary, does not support',
        modelFileURLPath: '/babylonjs-ionic-react-demo/assets/demo-model/fbx-type/',
        modelFileName: 'fbx-type-model.fbx',
        modelType: SupportedModelType.fbx,
        modelPreviewImgPath: '/babylonjs-ionic-react-demo/assets/demo-model/fbx-type/fbx-type-model.jpg',
    },
    {
        name: '.glb-type-test-item',
        description: '.glb type test item',
        modelFileURLPath: '/babylonjs-ionic-react-demo/assets/demo-model/gltf-type/',
        modelFileName: 'glb-type-model.glb',
        modelType: SupportedModelType.glb,
        modelPreviewImgPath: '/babylonjs-ionic-react-demo/assets/demo-model/gltf-type/glb-type-model.jpg',
    },
    // {
    //     name: '.max-type-test-item',
    //     description: '.max type test item',
    //     modelFileURLPath: '/babylonjs-ionic-react-demo/assets/demo-model/max-type/',
    //     modelFileName: 'max-type-model.max',
    //     modelType: SupportedModelType.max,
    //     modelPreviewImgPath: '/babylonjs-ionic-react-demo/assets/demo-model/max-type/max-type-model.jpg',
    // },
];
const DemoTestSameModelTypeNeedAssembleModelItems: ModelItemEntity[] = [
    {
        name: 'motherboard',
        description: 'motherboard',
        modelFileURLPath: '/babylonjs-ionic-react-demo/assets/demo-model/',
        modelFileName: 'assemble-item-A.glb',
        modelType: SupportedModelType.glb,
    },
    {
        name: 'storage',
        description: 'storage',
        modelFileURLPath: '/babylonjs-ionic-react-demo/assets/demo-model/',
        modelFileName: 'assemble-item-B.glb',
        modelType: SupportedModelType.glb,
    },
    {
        name: 'memory',
        description: 'memory',
        modelFileURLPath: '/babylonjs-ionic-react-demo/assets/demo-model/',
        modelFileName: 'assemble-item-C.glb',
        modelType: SupportedModelType.glb,
    },
];

export const Build: React.FC = () => {

    const { selectModelItem, deselectModelItem } = useSelectedModelItemsStore();

    const onCheckboxChange = (presetSelected: ModelItemEntity) => (event: CheckboxCustomEvent<CheckboxChangeEventDetail<any>>) => {
        if (event.detail.checked) {
            selectModelItem(presetSelected);
        } else {
            deselectModelItem(presetSelected.name);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Choose</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <>
                    <IonItem>
                        <IonLabel>Diff Model Type Test</IonLabel>
                    </IonItem>
                    {
                        DemoTestDiffModelTypeModelItems.map((singleModelItem) => {
                            return (
                                <IonCard key={`diff-model-type-test-item-${ singleModelItem.name }`} color={singleModelItem.modelType === SupportedModelType.fbx ? 'danger' : 'secondary'}>
                                    {
                                        singleModelItem.modelPreviewImgPath ? (<img style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt={singleModelItem.description} src={singleModelItem.modelPreviewImgPath} />) : null
                                    }
                                    <IonCardHeader>
                                        <IonCardTitle>{singleModelItem.name}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>{singleModelItem.description}</IonCardContent>
                                    {
                                        singleModelItem.modelType === SupportedModelType.fbx
                                            ? null
                                            : (
                                                <IonItem>
                                                    <IonCheckbox slot="start" onIonChange={onCheckboxChange(singleModelItem)}></IonCheckbox>
                                                    <IonLabel>Select this</IonLabel>
                                                </IonItem>
                                            )
                                    }

                                </IonCard>
                            );
                        })
                    }
                    <IonItem>
                        <IonLabel>Assemble PC Model Test</IonLabel>
                    </IonItem>
                    <IonGrid>
                        <IonRow>
                            {
                                DemoTestSameModelTypeNeedAssembleModelItems.map((singleModelItem) => {
                                    return (
                                        <IonCol key={`need-assemble-model-type-test-item-${ singleModelItem.name }`} size="6" size-sm="12" size-lg='3' >
                                            <IonCard color="success">
                                                {
                                                    singleModelItem.modelPreviewImgPath ? (<img alt={singleModelItem.description} src={singleModelItem.modelPreviewImgPath} />) : null
                                                }
                                                <IonCardHeader>
                                                    <IonCardTitle>{singleModelItem.name}</IonCardTitle>
                                                </IonCardHeader>
                                                <IonCardContent>{singleModelItem.description}</IonCardContent>
                                                <IonItem>
                                                    <IonCheckbox slot="start" onIonChange={onCheckboxChange(singleModelItem)}></IonCheckbox>
                                                    <IonLabel>Select this</IonLabel>
                                                </IonItem>
                                            </IonCard>
                                        </IonCol>
                                    );
                                })
                            }
                        </IonRow>
                    </IonGrid>
                </>
            </IonContent>
        </IonPage>
    );
};