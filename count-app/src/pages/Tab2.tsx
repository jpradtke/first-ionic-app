import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import HighscoreData from "./highscoreData"

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Bestenliste</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HighscoreData />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
