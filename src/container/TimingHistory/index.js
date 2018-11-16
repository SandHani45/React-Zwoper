import React, { Component } from 'react'
import Icons from '../../theme/icons';
import Image from '../../theme/images';
import './style.scss'
import UiTimingList from '../../components/UiTimingList'

export class Timing extends Component {
    render() {
        return (
            <div className={'timingScreen'}>
                <img src={Icons.closeIcon} className={'pull-right'} />
                <div className={'timingTtile'}>
                    <img src={Icons.timeHistory} alt="" width={'23px'} height={'23px;'} />Zeitverlauf
                </div>
                <UiTimingList source={Image.avtarImage} date={"29.09.18"} name={'Hansi Hirsch'} time={'- 2h 00m'} status={'Tiersitting'} />
                <UiTimingList source={Image.avtarImage} date={"29.09.18"} name={'Hansi Hirsch'} time={'- 2h 00m'} status={'Tiersitting'} />
                <UiTimingList source={Image.avtarImage} date={"29.09.18"} name={'Hansi Hirsch'} time={'- 2h 00m'} status={'Tiersitting'} />
                <UiTimingList source={Image.avtarImage} date={"29.09.18"} name={'Hansi Hirsch'} time={'- 2h 00m'} status={'Tiersitting'} />
                <UiTimingList source={Image.avtarImage} date={"29.09.18"} name={'Hansi Hirsch'} time={'- 2h 00m'} status={'Tiersitting'} />
            </div>
        )
    }
}

export default Timing