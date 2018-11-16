import React from 'react';
import UiHeading from '../../../components/UiHeading'

const AboutYou = (props) => {
    const { title, isEdit, discription, className} = props;

    return (
        <div className={isEdit? className : 'aboutUs'}>
            <UiHeading text={title} size={19} color={'#163D56'} type={'h1'} style={{ textAlign: 'left', margin: '0 0 10px', fontWeight: '600' }} />
            {(isEdit) ?
                <textarea className="editTextarea">{discription}</textarea>
            :
            <p>{discription}</p>}
        </div>
    );
};

export default AboutYou
