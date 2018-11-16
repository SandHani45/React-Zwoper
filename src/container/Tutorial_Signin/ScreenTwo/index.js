import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'
import Images from '../../../theme/images';
//import Container from '../../../components/BackCover'
import BackCover from '../../../components/BackCover';
import Logo from '../../../components/Logo';
import UiCombo from '../../../components/UiCombo'
import UiHeading from '../../../components/UiHeading'
import UiButton from '../../../components/UiButton'
import UiCarousel from '../Carousel'
import UiText from '../../../components/UiText'

import { colors } from '../../../theme/global'
import UiBackButton from '../../../components/UiBackButton';


const Heading = () => <UiHeading type='h1' color='white' size={59} text={'Hello!'} style={{ margin: '10px 0px 100px 0px' }} />

// const Container = styled.div` background-image: url(${Images.common_back});
// background-repeat: no-repeat; `;

let ScreenTwo = (props) => {
    console.log("tiio", colors)
    return <Grid>
        <UiBackButton />
        <Logo size={100} />
        <BackCover >
            <div style={{position: 'absolute',top: '-50%',width: '100%',textAlign: 'center'}}>
                <UiCarousel txt_color={colors.white} />
                <UiButton btn_bck_Color={colors.white} txt_color={colors.themeColor} margin={'80px 0px 40px 0px'}
                    onClick={() => props.history.push('/screen_two')} >
                    {'Registrieren'}
                </UiButton>
                <UiText text={'Es gelten unsere Nutzungs- und Datenschutzbedingungen'} color={colors.white} size={14} />
            </div>
        </BackCover>

    </Grid>
}

export default ScreenTwo;