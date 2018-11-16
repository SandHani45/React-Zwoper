import React from 'react';
import UiHeading from '../../../components/UiHeading'
import SkillTypes from "./SkillTypes";

const UserSkills = (props) => {
    const { title, data } = props;

    return (
        <div className={' userSkills mar-t30 mar-b50'}>
            <UiHeading text={title} size={19} color={'#163D56'} type={'h1'} style={{ textAlign: 'left', margin: '0 0 40px', fontWeight: '600' }} />
            {data.map((skill) => {
                return (
                    <div className={'userSkilInner'}>
                        <SkillTypes title={skill.title} skills={skill.skill} />
                    </div>)
            })}
        </div>
    );
};

export default UserSkills