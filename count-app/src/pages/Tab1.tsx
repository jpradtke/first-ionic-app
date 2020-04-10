import React from 'react';
import { IonContent,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { } from 'ionicons/icons';
//import ExploreContainer from '../components/ExploreContainer';

import Smiley from "./smiley.jpg"
import './Tab1.css';
import Count from "./count"

const Tab1: React.FC = () => {
  return (
    <IonPage>
       <IonHeader translucent>
      <IonToolbar>
        <IonTitle>The Counter</IonTitle>
      </IonToolbar>
    </IonHeader>,
    <IonContent fullscreen>
      
      <IonCard>
        <img src= {Smiley} alt="smile"/>
        <IonCardHeader>
          {/* <IonCardSubtitle>Destination</IonCardSubtitle>
          <IonCardTitle>Madison, WI</IonCardTitle> */}
        </IonCardHeader>
        <IonCardContent>
          <Count />
        </IonCardContent>
      </IonCard>
    </IonContent>

        
      
    </IonPage>
  );
};

export default Tab1;
