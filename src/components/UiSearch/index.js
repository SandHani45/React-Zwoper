import React from 'react'
import Icons from '../../theme/icons';

const UiSearch = (props) => {
    const { type, reference, placeholder} = props;
    return (
        <div className={"searchBox input-group"}>
             <div className={'input-group-btn'}><img src={Icons.searchIcon} alt="" /></div>
                <input className={'form-control'} placeholder={placeholder} {...this.props} ref= {reference} type={type}   />
         </div>
    )
} 

export default UiSearch