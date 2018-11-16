import React from 'react'
import './style.scss'

const UiRangeSlider = (props) => {
    const { type, min, max, value, onChange } = props;
    return (
        <div className="slidecontainer">
            <div className={'rangeSlideTitle pull-left'}>
             Umkreis
            </div>
            <div className={'rangeSlideTitle pull-right'}>
             {value} km
            </div> 
            <div className={'rangeProgress'}> 
             <div className={'rangesliderFill'} style={{width: parseInt(value)+"%"}}></div>        
             <input type={type} min={min} max={max} value={value} className="rangeSlider" onChange={(event)=>{onChange(event.target.value)}}/>
            </div>
        </div>
    )

}

export default UiRangeSlider