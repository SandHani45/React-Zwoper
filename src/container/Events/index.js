import React, { Component } from 'react'
import UiHeading from '../../components/UiHeading'
import UiEventList from '../../components/UiEventList'

export class Events extends Component {
  render() {
    return (
        <div>
            <UiHeading text={"Ereignisse"}
                    size={12}
                    color={'#163D56'}
                    type={'h1'}
                    style={{
                        textAlign: 'left',
                        margin: '10px 0 0',
                        
                    }}
                />

            <UiEventList color="red" 
                type="watch" 
                name={"(User) hat einen Zeitbetrag von dir angefordert"}
                status="Rasenmähen"
                date={"4 Std."} />

        </div>
    )
  }
}

export default Events