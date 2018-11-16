import React from 'react'
import './style.scss'
import UiSwitch from '../UiSwitch';


const UiMenuList = ( props ) => {
    const { title, rightComponent , icon } = props;
    console.log(this.props)
  
        return(
            <div >
                {title}
                {rightComponent}
            </div>
        );

}

export default UiMenuList
