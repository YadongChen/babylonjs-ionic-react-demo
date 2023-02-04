import './WebXR.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { ModelPreview } from '../../components/preview-model/ModelPreview';
import { withPresetBrightDisplayScene } from '../../components/preset-scenes/withPresetBrightDisplayScene';

export const WebXR: React.FC = () => {
  const PreviewScene = withPresetBrightDisplayScene()(ModelPreview);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AR / VR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <PreviewScene />
      </IonContent>
    </IonPage>
  );
};
