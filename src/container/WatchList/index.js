import React, { Component } from 'react'
import UiSearch from '../../components/UiSearch';
import UiHeading from '../../components/UiHeading'
import UiWatchList from '../../components/UiWatchList'
import Image from '../../theme/images';
import './style.scss'

export class WatchList extends Component {
  render() {
    return (
        <div className={'watchList'}>
            <UiSearch placeholder={"Nach Empfängern suchen"} />
            <UiHeading text={"Merkliste nach Fähigkeiten durchsuchen"}
                    size={12}
                    color={'#777777'}
                    type={'h1'}
                    style={{
                        textAlign: 'center',
                        margin: '10px 0 0',
                        
                    }}
                />

            <div>
                <UiHeading text={"Für Mensch und Tier"}
                    size={19}
                    color={'#163D56'}
                    type={'h1'}
                    style={{
                        textAlign: 'left',
                        margin: '50px 0 30px',
                        fontWeight:600
                    }}
                />
                <UiWatchList source={Image.avtarImage} />
                <UiWatchList source={Image.avtarImage} />
                <UiWatchList source={Image.avtarImage} />
                <UiWatchList source={Image.avtarImage} />
            </div>

            <div>
                <UiHeading text={"Für Mensch und Tier"}
                    size={19}
                    color={'#163D56'}
                    type={'h1'}
                    style={{
                        textAlign: 'left',
                        margin: '50px 0 30px',
                        fontWeight:600
                    }}
                />
                <UiWatchList source={Image.avtarImage} />
                <UiWatchList source={Image.avtarImage} />
                <UiWatchList source={Image.avtarImage} />
                <UiWatchList source={Image.avtarImage} />
            </div>


        </div>
    )
  }
}

export default WatchList