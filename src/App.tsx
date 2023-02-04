/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { glassesOutline, hammerOutline, scanOutline } from 'ionicons/icons';

import { Build } from './pages/bottom-tabs/Build';
import { IonReactRouter } from '@ionic/react-router';
import { Preview } from './pages/bottom-tabs/Preview';
import { WebXR } from './pages/bottom-tabs/WebXR';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/build">
            <Build />
          </Route>
          <Route exact path="/preview">
            <Preview />
          </Route>
          <Route path="/xr">
            <WebXR />
          </Route>
          <Route exact path="/">
            <Redirect to="/build" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="build" href="/build">
            <IonIcon icon={hammerOutline} />
            <IonLabel>Build</IonLabel>
          </IonTabButton>
          <IonTabButton tab="preview" href="/preview">
            <IonIcon icon={scanOutline} />
            <IonLabel>Model Preview</IonLabel>
          </IonTabButton>
          <IonTabButton tab="xr" href="/xr">
            <IonIcon icon={glassesOutline} />
            <IonLabel>AR / VR</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
