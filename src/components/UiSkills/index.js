import React from 'react'
import './style.scss'


const UiSkills = (props) => {
    const { skill } = props;
    return (
        <span className={'skillName'}>{skill}</span>
    )

}

export default UiSkills