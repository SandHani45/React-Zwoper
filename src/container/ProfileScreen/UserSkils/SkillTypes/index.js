import React from 'react';
import UiHeading from '../../../../components/UiHeading'
import UiSkill from '../../../../components/UiSkills'

const SkillTypes = (props) => {
    const { title, skills } = props;
    console.log(props)
    return (
        <div className={'userSkilInner'}>
            <UiHeading text={title} size={17} color={'#163D56'} type={'h1'} style={{ textAlign: 'left', margin: '0 0 10px', fontWeight: '500' }} />
            {skills.map((s) => {
                return (
                    <UiSkill skill={s} />
                )
            })
            }
        </div>
    );
};

export default SkillTypes