import React from 'react';
import AcctionButton from '../comments/AcctionButton';
import { on } from 'events';

const Input = ({ placeholder, onChange, name } : any) => {

    return(
        <>
            <input type="text" name={name}  placeholder={placeholder} onChange={onChange} />
        </>
    )

};

export default Input