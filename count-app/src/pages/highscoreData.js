import React from "react"
import {highscoreRef} from './firebase'
import { IonItem, IonLabel, IonContent, IonNote, IonAvatar, IonList, IonListHeader } from '@ionic/react';
import Avatar from "./avatar.png"


    class HighscoreData extends React.Component{
        constructor(){
            super()
            
            this.state = {}
            this.gotData = this.gotData.bind(this)
        }

        componentDidMount() {
            this.gotData();
          }
        
            gotData(){
                    highscoreRef.on('value', gotData => {
                        let scoreData = Object.values(gotData.val())
                        this.setState(scoreData)
                    }) 
                }

        render(){
        let listItem = Object.values(this.state).map( obj => 
            <IonItem>
                <IonAvatar slot="start">
                    <img src={Avatar} alt="avatar" />
                </IonAvatar>
                <IonLabel>
                    <h2>{obj.name} </h2> 
                </IonLabel>
                <IonNote>
                    <h3>{obj.count} </h3>
                </IonNote>
             </IonItem>
             ) 
            return(
                <IonContent>
                    <IonList>
                        <IonListHeader>
                            Highscores
                        </IonListHeader>
                        {listItem}
                    </IonList>
                </IonContent>   
            )
        }
    }
    export default HighscoreData