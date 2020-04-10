import React from 'react';
import { IonButton } from '@ionic/react';


class Count extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (){
        return(
            this.setState(
                prevState => {
                    return{
                            count: prevState.count + 1
                        }
                } )
        )
    }

    render(){
        return(
            <div className = "gameDiv">
                <ion-col class="ion-padding">
      <div>
      <h1 className ="counter">{this.state.count}</h1>
      </div>
    </ion-col>
                
                <IonButton onClick = {this.handleClick} className ="countButton">Count</IonButton>
            </div>

        )
    }
}

export default Count