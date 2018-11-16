import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import LocationSearch from './LocationSearch';
import { meters2ScreenPixels } from 'google-map-react/utils';
import UiHeading from '../../../components/UiHeading'
import UiRangeSlider from '../../../components/UiRangeSlider';
import Icons from '../../../theme/icons';
import './style.scss';

const Marker = ({ text }) => <div style={{ backgroundColor: 'red' }}> <img src={Icons.mapPinIcon} alt="" /></div>;

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11,
            googlemaps: null,
            apiReady: false,
            locaiton: {
                lat: 59.95,
                lng: 30.33
            },
            range: 30,
            map: null,
            searchPlace: ''
        }
    }
    setLocationBasedOnSearch = (data) => {
        let lat = data[0].geometry.location.lat();
        let lng = data[0].geometry.location.lng()
        this.setState({ locaiton: { lat: lat, lng: lng } })
        const { w, h } = meters2ScreenPixels(50, { lat, lng }, this.state.zoom)
    }

    fatchLocation = (lat, lng) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=AIzaSyCOJ-azfYuSWL5kN3WgMHWT2Ydrth8zwl4`)
            .then(response => response.json())
            .then(
                data => {
                    console.log("Message ", data)
                    if (data.results.length > 0) {
                        this.setState({
                            searchPlace: data.results[0].formatted_address
                        })
                    }
                }
            )
            .catch(error => console.log("error", error));

    }

    render() {
        return (
            <Grid>
                <Row>
                    <UiHeading text={"Ort"} type={'h1'} size={20} color={'#163D56'} style={{ textAlign: 'center', fontWeight: 'bold', margin: '10px 0 5px' }} />

                    <div className={"searchBox input-group"}>
                        <div className={'input-group-btn'}><img src={Icons.searchIcon} alt="" /></div>
                        {this.state.apiReady ?
                            <LocationSearch
                                center={this.state.locaiton}
                                onPlacesChanged={this.setLocationBasedOnSearch}
                                map={this.state.map}
                                searchValue={this.state.searchPlace}
                                googlemaps={this.state.googlemaps} /> : null}
                    </div>
                    <UiRangeSlider type="range" min="1" max="100" value={this.state.range} onChange={(data) => { this.setState({ range: data }) }} />
                </Row>
                <Row>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyADuzmgx6Ld6mo1qrFN0PF7SYwOPsRgp9s', libraries: ['places'] }}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}
                            center={this.state.locaiton}
                            onClick={({ x, y, lat, lng, event }) => {
                                console.log(x, y, lat, lng, event)
                                this.setState({ locaiton: { lat: lat, lng: lng } })
                                this.fatchLocation(lat, lng)
                            }}
                            // options={{
                            //     scrollwheel: false,
                            //   }}
                            onGoogleApiLoaded={({ map, maps }) => { this.setState({ map: map, googlemaps: maps, apiReady: true }) }}
                        >
                            <Marker
                                lat={this.state.locaiton.lat}
                                lng={this.state.locaiton.lng}
                                text={'Shailes'}
                            />
                        </GoogleMapReact>
                    </div>
                </Row>
            </Grid>
        );
    }
}

export default MapScreen;
