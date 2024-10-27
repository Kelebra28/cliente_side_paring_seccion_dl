import React from 'react';
import AcctionButton from '../comments/AcctionButton';

const EditsComments = ({ comment, onEditChange, onEditSubmit, cancel } : any) => {

    return(
        <>
            <textarea onChange={onEditChange} cols={30} rows={10}>{comment}</textarea>
            <AcctionButton onClick={onEditSubmit} acction='Save' />
            <AcctionButton onClick={cancel} acction='Cancel' />
        </>
    )

};

export default EditsComments  ;