import './WebXR.css';

import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToggle, IonToolbar, ToggleChangeEventDetail, ToggleCustomEvent } from '@ionic/react';
import { WebXRMode, useWebXRSettingStore } from '../../common/web-xr-setting.store';

import { ModelPreview } from '../../components/preview-model/ModelPreview';
import { withModelLoading } from '../../components/preview-model/withModelLoading';
import { withPresetBrightDisplayScene } from '../../components/preset-scenes/withPresetBrightDisplay.scene';
import { withSceneContainer } from '../../components/preset-scenes/withSceneContainer.scene';
import { withWebXR } from '../../components/preset-scenes/withWebXR.scene';

export const WebXR: React.FC = () => {

    const { currMode, setXRMode } = useWebXRSettingStore();

    const PreviewScene = withSceneContainer()(
        withWebXR()(
            withPresetBrightDisplayScene()(
            withModelLoading()(
                ModelPreview
            )
            )
        )
    );

    const handleWebXRModeToggleChange = (webXRMode: WebXRMode) => (event: ToggleCustomEvent<ToggleChangeEventDetail<any>>) => {
        if (event?.detail?.checked) {
            setXRMode(webXRMode);
        } else {
            if (webXRMode === WebXRMode.VR) {
                setXRMode(WebXRMode.AR);
            }
            if (webXRMode === WebXRMode.AR) {
                setXRMode(WebXRMode.VR);
            }
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>AR / VR</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <PreviewScene />
                <IonFab slot="fixed" vertical="bottom" horizontal="start">
                    <IonList>
                        <IonItem>
                            <IonLabel>AR</IonLabel>
                            <IonToggle name='web-xr-mode-switch-ar' checked={currMode === WebXRMode.AR} onIonChange={handleWebXRModeToggleChange(WebXRMode.AR)}></IonToggle>
                        </IonItem>
                        <IonItem>
                            <IonLabel>VR</IonLabel>
                            <IonToggle name='web-xr-mode-switch-vr' checked={currMode === WebXRMode.VR} onIonChange={handleWebXRModeToggleChange(WebXRMode.VR)}></IonToggle>
                        </IonItem>
                    </IonList>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};
