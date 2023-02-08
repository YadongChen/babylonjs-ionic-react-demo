import "./Preview.css";
import "@babylonjs/loaders/glTF";
import "@babylonjs/loaders/OBJ";
import "@babylonjs/loaders/";

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

import { ModelPreview } from "../../components/preview-model/ModelPreview";
import { withModelLoading } from "../../components/preview-model/withModelLoading";
import { withPresetBrightDisplayScene } from "../../components/preset-scenes/withPresetBrightDisplay.scene";
import { withSceneContainer } from "../../components/preset-scenes/withSceneContainer.scene";

export const Preview: React.FC = () => {

    const PreviewScene = withSceneContainer()(withPresetBrightDisplayScene()(withModelLoading()(ModelPreview)));

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Model Preview</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <PreviewScene />
            </IonContent>
        </IonPage>
    );
};
