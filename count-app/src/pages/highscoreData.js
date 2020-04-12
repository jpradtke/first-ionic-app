import React from "react"
import {highscoreRef} from './firebase'
import { IonItem, IonLabel, IonContent, IonNote } from '@ionic/react';


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
          <IonLabel>
          {obj.name} 
      </IonLabel>
      <IonNote>
      {obj.count}
      </IonNote>
        </IonItem>
         
        ) 
            return(
                <IonContent>
                    {listItem}
                </IonContent>
                    
                    
            )
        }
    }
    
    export default HighscoreData