import React from 'react';
import { IonButton, IonLabel, IonInput } from '@ionic/react';
import {highscoreRef} from './firebase'

class Count extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickReset = this.handleClickReset.bind(this)
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
    handleClickReset() {
        return (
            this.setState(
                () => {
                    return {
                        count: 0,
                        name: this.state.name
                    }
                }

            )
        )
    }
    handleSubmit(event) {
        
            
            let score = {
                name: this.state.name,
                count: this.state.count
            }
            highscoreRef.push(score)
            alert(`Super ${this.state.name} Dein Score ist: ${this.state.count}`)
            
        
    }

        //      Update the name state for each change in the input field
    handleChange(event){
        event.preventDefault();
        this.setState(
            {
                name: event.target.value
            }
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
                <br/>
               {/*  <IonButton onClick={this.handleClickReset} className ="countButton">Reset</IonButton> */}
                <br />
                <form onSubmit={this.handleSubmit.bind(this)}>
                        <IonLabel>
                            Name:
                        <IonInput type="text" value={this.state.name} onChange={this.handleChange.bind(this)} name="name"/>
                        </IonLabel>
                        <IonButton type="submit" value="Submit" >Submit</IonButton>
                    </form>
            </div>
        )
    }
}

export default Count