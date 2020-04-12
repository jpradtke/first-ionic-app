import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import HighscoreData from "./highscoreData"

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Highscores</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HighscoreData />
        <IonItem>
          <IonLabel>
            Item
      </IonLabel>
        </IonItem>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
