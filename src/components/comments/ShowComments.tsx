import React, { useState } from 'react';
import AcctionButton from './AcctionButton';
import EditsComments from '../inputs/EditsComments';

const  ShowComments = ({ email, comment, onDelete, onEditSubmit, onEditChange } :any) => {
const [edit, setEdit] = useState(false);

    return(
        <div>
            <h5>{email}</h5>
            {edit ? <EditsComments 
                        comment={comment}
                        onEditChange={onEditChange}
                        onEditSubmit={onEditSubmit} 
                        cancel={() => setEdit(!edit)}
                    /> 
                    : <p>{comment}</p>
                }
            <div>
                <AcctionButton acction='Edit' onClick={() => setEdit(!edit)}/>
                <AcctionButton acction='Detele' onClick={onDelete} />
                <AcctionButton acction ='Comment'/>
            </div>
        </div>
    );
};

export default ShowComments;