import React, { Component } from 'react'
import './styles.scss'

export default class UiCheckbox extends Component {
    render() {
        return (
            <label class="zsCheckbox" for="21865000000014251_21865000000014261_device">
                <div className="checkbox"></div>
                <span class="zsCheckboxFaux"></span>
                <span class="choiceLabel">wünsche ich mir von anderen</span>
            </label>
        )
    }
}