import React from 'react';
import AcctionButton from '../comments/AcctionButton';

const Input = ({ placeholder, onChange, name } : any) => {
    return(
        <>
            <input type="text" name={name}  placeholder={placeholder} onChange={onChange} />
        </>
    )

};

export default Input