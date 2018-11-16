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

const Heading = () => <UiHeading type='h1' color='white' size={59} text={'Hello!'} style={{ margin: '10px 0px 100px 0px' }} />

// const Container = styled.div` background-image: url(${Images.common_back});
// background-repeat: no-repeat; `;

let ScreenOne = (props) => {

    return <Grid>
        <Logo />
        <BackCover src={Images.decor_buildings} fancyImg={true}>
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    width: '100%',
                    textAlign: 'center'
                }}>
                <Heading />
                <UiCombo />
                <UiButton bColor='white' onClick={() => props.history.push('/screen_two')}>
                    {'Bestätigen'}
                </UiButton>
            </div>
        </BackCover>

    </Grid>
}

export default ScreenOne;