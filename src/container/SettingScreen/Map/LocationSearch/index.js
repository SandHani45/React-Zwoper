import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBox extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            value: props.searchValue
        }
        this.Circle = null
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.createCircle()
        this.setState({
            value: nextProps.searchValue
        });
    }

    render() {
        return <input
            className={'form-control'}
            ref="input" {...this.props}
            type="text"
            placeholder={"Ort eingeben"}
            value={this.state.value}
            onChange={(event) => {
                this.setState({
                    value: event.target.value
                })
            }}
        />;
    }
    createCircle = () => {
        if (this.Circle !== null) {
            this.Circle.setMap(null)
        }
        this.Circle = new this.props.googlemaps.Circle({
            strokeColor: 'red',
            strokeOpacity: 0.8,
            strokeWeight: 0,
            fillColor: "#54b967",
            fillOpacity: 0.35,
            map: this.props.map,
            center: this.props.center,
            radius: 5900
        })
    }
    onPlacesChanged = () => {
        if (this.props.onPlacesChanged) {
            this.props.onPlacesChanged(this.searchBox.getPlaces());
            this.createCircle()
        }
    }
    componentDidMount() {
        var input = ReactDOM.findDOMNode(this.refs.input);
        this.searchBox = new this.props.googlemaps.places.SearchBox(input)
        this.createCircle()
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
    }
    componentWillUnmount() {
        // https://developers.google.com/maps/documentation/javascript/events#removing
        // google.maps.event.clearInstanceListeners(this.searchBox);
    }
}