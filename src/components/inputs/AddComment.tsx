import React from 'react';
import Input from './Input';
import AcctionButton from '../comments/AcctionButton';

const AddComment = ({ onChange, onSubmit } : any) => {
    return (
        <div className='mt-12 w-6/12 h-10/12'>
            <Input onChange={onChange} name='email' placeholder='Add a email' />
            <textarea
                className='w-full p-4 mt-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                cols={60}
                rows={5}
                onChange={onChange}
                name='content'
                placeholder='Add a comment'
            />
            <AcctionButton acction='Submit' onClick={onSubmit} colorClass='bg-green-600 hover:bg-green-700' />
        </div>
    );
};

export default AddComment;