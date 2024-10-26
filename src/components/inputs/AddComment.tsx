import React from 'react';
import Input from './Input';
import AcctionButton from '../comments/AcctionButton';

const AddComment = ({ onChange, onSubmit } : any) => {
    return(
        <div>
            <Input onChange={onChange}  name='email'  placeholder='Add a email' />
            <Input onChange={onChange} name='content'  placeholder='Add a comment' />
            <AcctionButton acction='Submit' onClick={onSubmit} />
        </div>
    );
};

export default AddComment;