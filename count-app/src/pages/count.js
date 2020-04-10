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
                <h1>{this.state.count}</h1>
                <IonButton className = "gameButton" onClick = {this.handleClick} >Count</IonButton>
            </div>

        )
    }
}

export default Count