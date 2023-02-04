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
import { withPresetBrightDisplayScene } from "../../components/preset-scenes/withPresetBrightDisplayScene";

export const Preview: React.FC = () => {

    const PreviewScene = withPresetBrightDisplayScene()(ModelPreview);

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
